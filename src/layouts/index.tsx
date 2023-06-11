import Header from "@/components/Header";
import "antd/dist/reset.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "umi";
import "./index.less";
import Footer from "@/components/Footer";
import { useModel } from "umi";

export default function Layout() {
  const { path } = useModel("path");
  const [footerPosition, setFooterPosition] = useState<number>(0);
  useLayoutEffect(() => {
    function updatePosition() {
      let footerPoint: any = document
        .getElementById("footer-cpn")
        ?.getBoundingClientRect()?.y;
      setFooterPosition(footerPoint);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  console.log(footerPosition);

  return (
    <div
      className={`layout-container ${
        footerPosition < 670 ? "over-flow-scroll" : ""
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
