import arrowDown from "@/assets/arrowDown.svg";
import logo from "@/assets/logoHeader.png";
import { input } from "@/components/Input";
import { label } from "@/components/Label";
import { routes } from "@/routes";
import { useEffect, useState } from "react";
import { history, useModel } from "umi";
import "./index.less";

export default function Header() {
  const { path, updatePath } = useModel("path");

  const handleClickMenuHeader = (path: string) => {
    updatePath(path);
  };

  return (
    <div className="header-component-container">
      <div className="head">
        <div className="meta-head">
          <img
            src={logo}
            style={{ height: 50, cursor: "pointer" }}
            onClick={() => {
              updatePath("/");
            }}
          />
          <input.header />
          <div className="log-in-log-out-side">
            <label.md
              className="log-in-log-out"
              onClick={() => {
                updatePath("/sign-up");
              }}
            >
              Đăng Ký
            </label.md>
            <label.xl>|</label.xl>
            <label.md
              className="log-in-log-out"
              onClick={() => {
                updatePath("/sign-in");
              }}
            >
              Đăng Nhập
            </label.md>
          </div>
        </div>
        <div className="menu-head">
          {routes.map((i: any) =>
            i.children.length > 0 ? (
              <div
                key={i.path}
                className={`menu-item dropdown-menu-item 
              ${
                i?.children?.some((x: any) => path === x?.path)
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
                className={`menu-item ${path === i.path ? "menu-active" : ""}`}
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
