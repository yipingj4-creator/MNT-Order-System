import { readFile, access } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const required = ["site/index.html", "site/styles.css", "site/app.js", "site/config/users.json", "site/config/products.json", "netlify.toml"];
for (const file of required) await access(join(root, file));

const users = JSON.parse(await readFile(join(root, "site/config/users.json"), "utf8"));
const products = JSON.parse(await readFile(join(root, "site/config/products.json"), "utf8"));
const appSource = await readFile(join(root, "site/app.js"), "utf8");
const roles = ["sales", "production_director", "general_manager", "finance_director", "production_assistant", "backup_database"];
for (const role of roles) {
  const config = JSON.parse(await readFile(join(root, `site/config/roles/${role}.json`), "utf8"));
  if (config.id !== role) throw new Error(`Role mismatch: ${role}`);
}
if (users.filter((u) => u.role === "sales").length !== 10) throw new Error("Expected 10 sales users");
if (new Set(users.map((u) => u.password)).size !== users.length) throw new Error("Every user must have a distinct password");
for (const series of ["C系列", "T系列", "M系列", "X-fiber系列", "X-fabric（X-1814）系列", "X-CO2系列"]) if (!products.some((p) => p.series === series)) throw new Error(`Missing series: ${series}`);
for (const requiredOption of ["800W", "1.8kW", "11kW", "40000RPM", "国产导轨（T3）", "兴多维", "施耐德"]) {
  if (!appSource.includes(requiredOption)) throw new Error(`Missing configuration option: ${requiredOption}`);
}
for (const powerField of ["voltage", "hertz", "phase", "powerNote"]) {
  if (!appSource.includes(`[\"${powerField}\"`)) throw new Error(`Missing split power field: ${powerField}`);
}
for (const feature of ["Logo 附件", "外观修改附件", "导入报价文件", "4分区", "主轴铣刀", "斜切刀"]) {
  if (!appSource.includes(feature)) throw new Error(`Missing requested feature: ${feature}`);
}
if (!appSource.includes("Logo 与外观修改附件同步给全部权限查看")) throw new Error("Shared attachment permission notice missing");
for (const feature of ["backupArchivedAt", "已录入备份数据库", "生产助理确认后自动归档", "所有权限均可打印"]) if (!appSource.includes(feature)) throw new Error(`Missing final archive/print feature: ${feature}`);
if (!appSource.includes("删除生产单") || !appSource.includes("salespersonId === session.user.id")) throw new Error("Missing sales-owned order deletion");
for (const feature of ["C系列送料架", "C系列收料架", "标配备注", "另购备注"]) if (!appSource.includes(feature)) throw new Error(`Missing rack/tool feature: ${feature}`);
for (const feature of ["光纤激光配置清单", "激光功率", "交换平台", "管材范围", "视觉定位系统"]) if (!appSource.includes(feature)) throw new Error(`Missing laser feature: ${feature}`);
for (const feature of ["CO2 激光配置清单", "CO2 激光功率", "激光管", "CCD 相机", "送料架"]) if (!appSource.includes(feature)) throw new Error(`Missing CO2 feature: ${feature}`);
if (appSource.includes('["tool", "刀具配置"]') || appSource.includes('["blade", "刀片"]')) throw new Error("Duplicate tool fields must be removed");
console.log(`Validated: ${users.length} users, ${roles.length} roles, ${products.length} products.`);
