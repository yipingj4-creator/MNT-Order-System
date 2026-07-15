import { cp, mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, "client"), { recursive: true });
await cp(resolve(root, "site"), resolve(dist, "client"), { recursive: true });

const users = JSON.parse(await readFile(resolve(root, "site", "config", "users.json"), "utf8"));
const publicUsers = users.map(({ id, name, role }) => ({ id, name, role }));
await writeFile(resolve(dist, "client", "config", "users.json"), JSON.stringify(publicUsers, null, 2), "utf8");
const worker = `const USERS = ${JSON.stringify(users)};
const QUOTATION_ROLES = ["sales", "finance_director", "general_manager"];
function encode(value) { return btoa(unescape(encodeURIComponent(value))).replace(/=/g, "").replace(/\\+/g, "-").replace(/\\//g, "_"); }
function decode(value) { return decodeURIComponent(escape(atob(value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4)))); }
async function sign(value, secret) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const bytes = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)));
  return btoa(String.fromCharCode(...bytes)).replace(/=/g, "").replace(/\\+/g, "-").replace(/\\//g, "_");
}
async function issueToken(user, secret) {
  const body = encode(JSON.stringify({ id: user.id, exp: Date.now() + 12 * 60 * 60 * 1000 }));
  return body + "." + await sign(body, secret);
}
async function authenticate(request, env) {
  const token = (request.headers.get("authorization") || "").replace(/^Bearer\\s+/i, "");
  const [body, supplied] = token.split("."); if (!body || !supplied || !env.AUTH_SECRET) return null;
  const expected = await sign(body, env.AUTH_SECRET); if (expected !== supplied) return null;
  try { const payload = JSON.parse(decode(body)); if (payload.exp < Date.now()) return null; return USERS.find((user) => user.id === payload.id) || null; } catch { return null; }
}
async function login(request, env) {
  if (!env.AUTH_SECRET) return new Response("登录服务未配置", { status: 503 });
  let input; try { input = await request.json(); } catch { return new Response("请求无效", { status: 400 }); }
  const user = USERS.find((item) => item.id === input.id && item.password === input.password);
  if (!user) return new Response("账号或密码不正确", { status: 401 });
  const token = await issueToken(user, env.AUTH_SECRET); const { password, ...safeUser } = user;
  return Response.json({ token, user: safeUser }, { headers: { "cache-control": "no-store" } });
}
function safePart(value) { return /^[a-zA-Z0-9_-]{1,80}$/.test(value || "") ? value : null; }
async function files(request, env, url) {
  const user = await authenticate(request, env);
  if (!user) return new Response("账号验证失败", { status: 401 });
  const orderId = safePart(url.searchParams.get("orderId"));
  const category = safePart(url.searchParams.get("category"));
  if (!orderId || !["logo", "appearance", "quotation"].includes(category)) return new Response("附件参数无效", { status: 400 });
  if (category === "quotation" && !QUOTATION_ROLES.includes(user.role)) return new Response("当前账号无权查看报价文件", { status: 403 });
  const key = orderId + "/" + category;
  if (request.method === "DELETE") {
    if (user.role !== "sales") return new Response("只有销售可以删除附件", { status: 403 });
    await env.FILES.delete(key); return Response.json({ ok: true });
  }
  if (request.method === "POST") {
    const encodedName = request.headers.get("x-file-name") || "attachment";
    let name = encodedName; try { name = decodeURIComponent(encodedName); } catch {}
    await env.FILES.put(key, request.body, { httpMetadata: { contentType: request.headers.get("content-type") || "application/octet-stream" }, customMetadata: { name, uploadedBy: user.id, role: user.role } });
    return Response.json({ ok: true, name });
  }
  if (request.method === "GET") {
    const object = await env.FILES.get(key); if (!object) return new Response("附件不存在", { status: 404 });
    const headers = new Headers(); object.writeHttpMetadata(headers); headers.set("content-disposition", "attachment; filename*=UTF-8''" + encodeURIComponent(object.customMetadata?.name || "attachment"));
    return new Response(object.body, { headers });
  }
  return new Response("Method not allowed", { status: 405 });
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/login" && request.method === "POST") return login(request, env);
    if (url.pathname === "/api/files") return files(request, env, url);
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const accept = request.headers.get("accept") || "";
    if (!accept.includes("text/html")) return response;
    const indexRequest = new Request(new URL("/index.html", request.url), request);
    return env.ASSETS.fetch(indexRequest);
  }
};
`;
await writeFile(resolve(dist, "server", "index.js"), worker, "utf8");
console.log("Sites static build created in dist/.");
