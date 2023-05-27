import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "homepage/index" },
    { path: "/introduce", component: "introduce/index" },
  ],
  title: "Web quảng bá văn hóa",
  theme: {
    "@primary-color": "#0c6122",
  },
  npmClient: "yarn",
});
