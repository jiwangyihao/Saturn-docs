import { defineConfig } from "vitepress";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Saturn AI",
  description: "类 MoE 混合专家架构的多源细胞知识库农业智能体",
  head: [["link", { rel: "icon", href: "/logo.png", type: "image/png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "首页", link: "/" }],

    socialLinks: [
      { icon: "github", link: "https://github.com/jiwangyihao/Saturn-docs" },
    ],

    footer: {
      copyright: "Copyright © 2024-present, Saturn AI",
    },

    logo: "logo.png",
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    },
    en: {
      label: "English",
      lang: "en",

      title: "Saturn AI",
      description:
        "A multi-source cell knowledge base agricultural intelligent agent with a MoE-like hybrid expert architecture",

      themeConfig: {
        nav: [{ text: "Home", link: "/en/" }],

        logo: "logo.png",
      },
    },
  },

  lastUpdated: true,
  cleanUrls: true,

  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
