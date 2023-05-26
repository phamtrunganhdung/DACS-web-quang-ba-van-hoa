import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/introduce", component: "introduce/index" },
  ],
  npmClient: "yarn",
});
