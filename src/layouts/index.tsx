import Header from "@/components/Header";
import "antd/dist/reset.css";
import { useState } from "react";
import { Outlet } from "umi";
import "./index.less";
import Footer from "@/components/Footer";
import { useModel } from "umi";

export default function Layout() {
  const { path } = useModel("path");

  return (
    <div className="layout-container">
      <Header />
      <div className={`body ${path === "/" ? "" : "body-padding"}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
