export const routes = [
  {
    path: "/",
    name: "Trang Chủ",
    children: [],
  },
  {
    path: "/introduce",
    name: "Giới Thiệu",
    children: [],
  },
  {
    path: "/news",
    name: "Tin Tức",
    children: [
      { path: "/news/location", name: "Địa Điểm" },
      { path: "/news/picAndVid", name: "Ảnh Và Video" },
    ],
  },
  {
    path: "/exhibition",
    name: "Triển Lãm",
    children: [],
  },
  {
    path: "/contact",
    name: "Liên Hệ",
    children: [],
  },
];
