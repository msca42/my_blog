import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // 设置网站唯一Netlify URL
  site: "https://mayflyblog.netlify.app/",
  integrations: [preact()]
});