import arrowDown from "@/assets/arrowDown.svg";
import logo from "@/assets/logoHeader.png";
import { input } from "@/components/Input";
import { label } from "@/components/Label";
import { routes } from "@/routes";
import { useEffect, useState } from "react";
import { history } from "umi";
import "./index.less";

export default function Header({ onChange }: any) {
  const [menuSl, setMenuSl] = useState<string>("/");

  const handleClickMenuHeader = (path: string) => {
    history.push(path);
    setMenuSl(path);
  };

  useEffect(() => {
    setMenuSl(history.location.pathname);
  }, [history]);

  useEffect(() => {
    onChange(menuSl);
  }, [menuSl]);

  return (
    <div className="header-component-container">
      <div className="head">
        <div className="meta-head">
          <img
            src={logo}
            style={{ height: 50, cursor: "pointer" }}
            onClick={() => {
              history.push("/");
              setMenuSl("/");
            }}
          />
          <input.header />
          <div className="log-in-log-out-side">
            <label.md className="log-in-log-out">Đăng Ký</label.md>
            <label.xl>|</label.xl>
            <label.md className="log-in-log-out">Đăng Nhập</label.md>
          </div>
        </div>
        <div className="menu-head">
          {routes.map((i: any) =>
            i.children.length > 0 ? (
              <div
                key={i.path}
                className={`menu-item dropdown-menu-item 
              ${
                i?.children?.some((x: any) => menuSl === x?.path)
                  ? "menu-active"
                  : ""
              }`}
              >
                <label.md>{i.name}</label.md>
                <img src={arrowDown} />
                <div className="dropdown-menu-content">
                  {i.children.map((j: any) => (
                    <div
                      key={j.path}
                      className="dropdown-menu-child"
                      onClick={() => handleClickMenuHeader(j.path)}
                    >
                      <label.md>{j.name}</label.md>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                key={i.path}
                className={`menu-item ${
                  menuSl === i.path ? "menu-active" : ""
                }`}
                onClick={() => handleClickMenuHeader(i.path)}
              >
                <label.md>{i.name}</label.md>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
