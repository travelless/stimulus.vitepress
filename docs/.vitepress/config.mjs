import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'stimulus',
  description:
    'The speed of a single-page web application without having to write any JavaScript.',
  base: '/stimulus/', // for GitHub Pages
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/content/1.介绍.md' },
      { text: '评论', link: '/comments' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/travelless/stimulus' },
    ],
    username: 'travelless',
  },
  vite: {
    plugins: [
      AutoSidebar(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})
