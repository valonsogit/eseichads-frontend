import { defineConfig } from 'astro/config';
import * as dotenv from 'dotenv';
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config

dotenv.config({ path: `./.env.${process.env.ASTRO_MODE}` });

export default defineConfig({
  server: { host: true },
  integrations: [tailwind(), sitemap(), prefetch(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), vue({ appEntrypoint: '/src/pages/_app' })],
  site: process.env.PUBLIC_SITE_URL,
  base: process.env.PUBLIC_BASE,
});