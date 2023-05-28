import "./index.less";
import "antd/dist/reset.css";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Outlet } from "umi";
import { history } from "umi";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <div
        className={`body ${
          history.location.pathname === "/" ? "" : "body-padding"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
