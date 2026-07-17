import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const out = resolve(root, "public-cloudflare");

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(resolve(root, "site"), out, { recursive: true });

const users = [
  { id: "stella", name: "Stella", role: "sales" },
  { id: "alina", name: "Alina", role: "sales" },
  { id: "liu-xiaona", name: "刘晓娜", role: "sales" },
  { id: "liu-yuanyuan", name: "刘远远", role: "sales" },
  { id: "hu-huihui", name: "胡辉辉", role: "sales" },
  { id: "wang-weidong", name: "王伟东", role: "sales" },
  { id: "wang-zhicheng", name: "王志成", role: "sales" },
  { id: "zhou-yanling", name: "周燕玲", role: "sales" },
  { id: "liu-bo", name: "刘波", role: "sales" },
  { id: "liu-wenbin", name: "刘文斌", role: "sales" },
  {
    id: "prod-director",
    name: "生产总监",
    role: "production_director"
  },
  {
    id: "general-manager",
    name: "总经理",
    role: "general_manager"
  },
  {
    id: "finance-director",
    name: "财务总监",
    role: "finance_director"
  },
  {
    id: "production-assistant",
    name: "生产助理",
    role: "production_assistant"
  },
  {
    id: "backup-admin",
    name: "备份管理员",
    role: "backup_database"
  }
];

await mkdir(resolve(out, "config"), { recursive: true });

await writeFile(
  resolve(out, "config/users.json"),
  JSON.stringify(users, null, 2),
  "utf8"
);

console.log("Cloudflare client build complete.");
