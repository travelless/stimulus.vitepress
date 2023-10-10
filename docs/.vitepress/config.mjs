import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "stimulus",
  description:
    "The speed of a single-page web application without having to write any JavaScript.",
  base: "/stimulus/", // for GitHub Pages
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "content", link: "/content/1.介绍.md" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/travelless/stimulus" },
    ],
  },
  vite: {
    plugins: [AutoSidebar()],
  },
});
