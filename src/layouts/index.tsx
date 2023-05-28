import Header from "@/components/Header";
import "antd/dist/reset.css";
import { useState } from "react";
import { Outlet } from "umi";
import "./index.less";

export default function Layout() {
  const [pathName, setPathName] = useState<string>("");
  return (
    <div className="layout-container">
      <Header
        onChange={(value: string) => {
          setPathName(value);
        }}
      />
      <div className={`body ${pathName === "/" ? "" : "body-padding"}`}>
        <Outlet />
      </div>
    </div>
  );
}
