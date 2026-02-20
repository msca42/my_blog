// Tailwind CSS 配置文件 - 用于自定义 Tailwind 样式
/** @type {import('tailwindcss').Config} */
export default {
  // 指定 Tailwind 需要扫描的文件路径，用于生产环境摇树优化
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // 暗黑模式使用 class 策略，通过添加 dark 类来切换
  darkMode: 'class',
  // 主题配置
  theme: {
    extend: {
      // 扩展颜色配置
      colors: {
        primary: '#ff9776', // 自定义主色调
      },
    },
  },
  // 使用的插件
  plugins: [require('@tailwindcss/typography')], // 排版插件，用于美化 Markdown 内容
};
