# Cloudflare 部署

1. 将本压缩包解压后上传到 GitHub 私有仓库。
2. 在 Workers & Pages 中连接该 GitHub 仓库，构建命令填写 `npm run cloudflare:build`，部署命令填写 `npx wrangler deploy`。Wrangler 会自动创建免费的 KV 附件存储。
3. 在 Worker 的 Settings > Variables and Secrets 中添加两个加密变量：
   - `AUTH_SECRET`：任意一段至少 32 位的随机字符。
   - `MNT_USERS_JSON`：粘贴原始 `site/config/users.json` 的完整内容。
4. 重新部署后即可获得任何浏览器可访问的 `workers.dev` 网址。

不要把真实的 `site/config/users.json` 上传到 GitHub。
