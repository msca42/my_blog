// ESLint 配置文件 - 用于代码质量检查
module.exports = {
  // 定义代码运行环境
  env: {
    browser: true, // 支持浏览器全局变量
    es2021: true, // 支持 ES2021 语法
    node: true, // 支持 Node.js 全局变量
  },
  // 扩展的规则配置
  extends: [
    'eslint:recommended', // ESLint 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    'plugin:astro/recommended', // Astro 文件推荐规则
    'prettier', // 与 Prettier 集成，避免冲突
  ],
  // TypeScript 解析器
  parser: '@typescript-eslint/parser',
  // 解析器选项
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module', // 使用 ES 模块
  },
  // 使用的插件
  plugins: ['@typescript-eslint', 'prettier'],
  // 针对特定文件的覆盖配置
  overrides: [
    {
      files: ['*.astro'], // 针对 .astro 文件
      parser: 'astro-eslint-parser', // Astro 专用解析器
      parserOptions: {
        parser: '@typescript-eslint/parser', // 在 Astro 中解析 TypeScript
        extraFileExtensions: ['.astro'], // 额外支持 .astro 扩展名
      },
      rules: {
        'prettier/prettier': 'off', // Astro 文件中关闭 Prettier 规则（由 Prettier 插件处理）
      },
    },
  ],
  // 自定义规则
  rules: {
    'prettier/prettier': 'error', // Prettier 格式错误作为 ESLint 错误
    '@typescript-eslint/no-explicit-any': 'warn', // 使用 any 类型时发出警告
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 未使用的变量警告，但忽略以下划线开头的参数
  },
  // 忽略的文件模式
  ignorePatterns: ['dist', 'node_modules', '*.config.*'],
};
