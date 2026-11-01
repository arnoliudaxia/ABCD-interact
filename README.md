# ABCD 切换开关

四个按钮铺满整个视口的极简交互页面。点击任一按钮即可切换它的开关状态（灰色 / 深青色），可多选。

## 在线演示

**https://arnoliudaxia.github.io/ABCD-interact/**

## 技术栈

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v3
- shadcn/ui 组件库（已预置 50+ 组件，本页面未使用）

## 本地开发

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages，工作流见
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)。

为适配子路径托管，做了两处调整：

- `vite.config.ts` 中 `base: './'`，资源使用相对路径，可部署在任意子路径下
- `src/main.tsx` 使用 `HashRouter`，刷新与深层链接不会 404

## 交互说明

- 点击按钮：切换开关状态，`aria-pressed` 同步更新
- 四个按钮等分视口，字号随视口自适应（`clamp()`）
- 支持键盘操作与焦点环（`focus-visible`）
