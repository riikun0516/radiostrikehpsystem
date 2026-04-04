import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; // cloudflareに変更
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://radiostrike.jp',
  output: 'server', // SSRを維持

  // アダプターを cloudflare に変更
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [
    tailwind(),
    sitemap(),
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },

  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    // Cloudflare環境での依存関係の最適化
    optimizeDeps: {
      exclude: []
    },
  }
});