import "./index.less";
import "antd/dist/reset.css";
import { useEffect } from "react";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
    </div>
  );
}
