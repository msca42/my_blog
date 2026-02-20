// Content Collections 配置文件 - 用于定义和管理内容集合
import { defineCollection, z } from 'astro:content';

// 定义博客文章集合
const blog = defineCollection({
  // 类型为 content，表示这是包含 Markdown/MDX 内容的集合
  type: 'content',
  // 使用 Zod 定义内容的 schema（数据验证规则）
  schema: z.object({
    title: z.string(), // 文章标题（必填）
    pubDate: z.coerce.date(), // 发布日期（必填，自动转换为日期类型）
    description: z.string(), // 文章描述（必填）
    author: z.string(), // 作者（必填）
    image: z // 文章图片（可选）
      .object({
        url: z.string(), // 图片 URL
        alt: z.string(), // 图片替代文本
      })
      .optional(),
    tags: z.array(z.string()).optional(), // 标签数组（可选）
  }),
});

// 导出所有集合
export const collections = { blog };
