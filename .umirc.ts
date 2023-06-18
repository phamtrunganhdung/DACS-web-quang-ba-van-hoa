export default {
  routes: [
    { path: "/", component: "homepage" },
    { path: "/introduce", component: "introduce" },
    { path: "/news", component: "news" },
    { path: "/news/location", component: "news/location" },
    {
      path: "/news/location/details-location",
      component: "news/location/detailsLocation",
    },
    {
      path: "/news/location/artifacts",
      component: "news/location/artifacts",
    },
    {
      path: "/news/location/artifacts/details-artifacts",
      component: "news/location/artifacts/detailsArtifacts",
    },
    { path: "/news/picAndVid", component: "news/picAndVid" },
    { path: "/exhibition", component: "exhibition" },
    {
      path: "/exhibition/details-exhibition",
      component: "exhibition/detailsExhibition",
    },
    { path: "/contact", component: "contact" },
  ],
  title: "Web quảng bá văn hóa",
  theme: {
    "@primary-color": "#0c6122",
  },
  npmClient: "yarn",
  plugins: ["@umijs/plugins/dist/model"],
  model: {},
};
