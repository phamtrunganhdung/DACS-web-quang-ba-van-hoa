import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "homepage" },
    { path: "/introduce", component: "introduce" },
    { path: "/news", component: "news" },
    { path: "/news/location", component: "news/location" },
    {
      path: "/news/location/details-location",
      component: "news/location/detailsLocation",
    },
    { path: "/news/picAndVid", component: "news/picAndVid" },
    { path: "/exhibition", component: "exhibition" },
    { path: "/contact", component: "contact" },
  ],
  title: "Web quảng bá văn hóa",
  theme: {
    "@primary-color": "#0c6122",
  },
  npmClient: "yarn",
});
