// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "element-plus/dist/index.css";
import GLayout from "./GLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: GLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
