// Astro 配置文件 - 用于配置 Astro 项目
import { defineConfig } from 'astro/config';

// 引入 Preact 集成，用于在 Astro 中使用 Preact 组件
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // 设置网站的基础 URL，用于部署到 Netlify
  site: "https://mayflyblog.netlify.app/",
  // 集成配置
  integrations: [preact()] // 添加 Preact 集成
});
