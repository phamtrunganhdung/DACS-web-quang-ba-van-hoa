import Header from "@/components/Header";
import "antd/dist/reset.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet } from "umi";
import "./index.less";
import Footer from "@/components/Footer";
import { useModel } from "umi";

export default function Layout() {
  const { path } = useModel("path");
  const [scrollPosition, setPosition] = useState<number>(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div
      className={`layout-container ${
        scrollPosition > 3800 ? "over-flow-scroll" : ""
      }`}
    >
      <Header />
      <div className={`body ${path === "/" ? "" : "body-padding"}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
