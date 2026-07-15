import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const out = resolve(root, "public-cloudflare");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(resolve(root, "site"), out, { recursive: true });
let users;
if (process.env.MNT_USERS_JSON) users = JSON.parse(process.env.MNT_USERS_JSON);
else users = JSON.parse(await readFile(resolve(root, "site/config/users.json"), "utf8"));
await writeFile(resolve(out, "config/users.json"), JSON.stringify(users.map(({ id, name, role }) => ({ id, name, role })), null, 2), "utf8");
console.log("Cloudflare client build complete.");
