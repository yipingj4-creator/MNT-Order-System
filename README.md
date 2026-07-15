# MNT 销售生产系统

可直接上传 GitHub 并部署到 Netlify 的静态业务系统原型。包含 C/T 系列配置、六个权限模块、五级顺序审批、配置修改回销售重确认、完成后导出打印，以及 JSON 数据库备份。

## 审批流程

`销售确认 → 生产总监 → 总经理 → 财务总监 → 生产助理 → 完成/打印`

任一非销售审批环节修改配置后，生产单会返回原销售。销售确认后，系统直接进入原修改环节的下一环节，不重复已经完成的审批。

## 部署到 Netlify

1. 将整个项目上传到 GitHub。
2. 在 Netlify 选择 **Add new site → Import an existing project**，连接该 GitHub 仓库。
3. Netlify 会自动读取 `netlify.toml`：构建命令为 `npm run build`，发布目录为 `site`。
4. 点击 Deploy。无需额外环境变量。

也可以直接将 `site` 文件夹拖到 Netlify Drop 发布。

## 初始账号

登录页点击“查看演示账号”可查看所有账号。销售账号分别对应 Stella、Alina、刘晓娜、刘远远、胡辉辉、王伟东、王志成、周燕玲、刘波、刘文斌；每人密码不同。其他五个模块各有独立账号和密码。

账号配置位于 `site/config/users.json`，六套权限分别位于 `site/config/roles/`。

## 数据与正式上线说明

当前版本为无需服务器即可部署和演示的版本，订单保存在当前浏览器的 `localStorage`，适合流程确认和单机使用。账号密码也属于前端演示配置。

若要多人跨设备实时协作，正式上线前必须把以下两部分迁移到服务端：

- 使用 Supabase、Neon/PostgreSQL 等数据库保存订单、审批和审计记录；
- 使用服务端登录、密码哈希、HTTPS 会话和角色鉴权，删除前端明文密码配置。

备份数据库模块可随时导出完整 JSON，便于后续迁移。

## 仓库内置终端数据库

完整版仓库的 `database/` 目录包含：

- `mnt_terminal.db`：可由 SQLite 3 直接打开的终端数据库；
- `documents/`：14 份原始 PDF 的完整备份，按模板、C 系列和 T 系列分类；
- `extracted-text/`：PDF 逐页文本索引；
- `manifest.json`：每份文件的 SHA-256、大小和页数，可用于校验备份；
- `README.txt`：数据库表结构和目录说明。

数据库已经预置 6 套权限、15 个用户的安全密码哈希、12 个产品配置和完整业务表。Netlify 只发布 `site/`，不会公开 `database/` 中的内部资料。

验证终端数据库：

```bash
python scripts/verify_database.py
```

## 本地检查

```bash
npm run build
```

检查通过后，用任意静态文件服务器打开 `site` 目录即可。
