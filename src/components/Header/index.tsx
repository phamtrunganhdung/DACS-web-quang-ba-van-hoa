import "./index.less";
import { Outlet } from "umi";
import { history } from "umi";
import { input } from "@/components/Input";
import { label } from "@/components/Label";
import logo from "@/assets/logoHeader.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuSl, setMenuSl] = useState<string>("/");
  const routes = [
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
      children: [],
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
  const handleClickMenuHeader = (path: string) => {
    history.push(path);
    setMenuSl(path);
  };

  useEffect(() => {
    setMenuSl(history.location.pathname);
  }, [history]);

  return (
    <div className="header-component-container">
      <div className="head">
        <div className="meta-head">
          <img src={logo} style={{ height: 50 }} />
          <input.header />
          <div className="log-in-log-out-side">
            <label.md className="log-in-log-out">Đăng Ký</label.md>
            <label.xl>|</label.xl>
            <label.md className="log-in-log-out">Đăng Nhập</label.md>
          </div>
        </div>
        <div className="menu-head">
          {routes.map((i: { path: string; name: string }) => (
            <div
              key={i.path}
              className={`menu-item ${menuSl === i.path ? "menu-active" : ""}`}
              onClick={() => handleClickMenuHeader(i.path)}
            >
              <label.md>{i.name}</label.md>
            </div>
          ))}
        </div>
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}
