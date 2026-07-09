import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // nodeアダプターに変更
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://radiostrike.jp',
  output: 'server', // SSRを維持

  // アダプターを node に変更、standalone モードに設定
  adapter: node({
    mode: 'standalone',
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
    optimizeDeps: {
      exclude: []
    },
  }
});