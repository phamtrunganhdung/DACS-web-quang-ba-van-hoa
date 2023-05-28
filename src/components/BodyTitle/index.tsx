import "./index.less";
import { label } from "@/components/Label";
import { routes } from "@/routes";
import { useEffect, useState } from "react";
import { history } from "umi";

export default function BodyTitle() {
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    if (!history.location.pathname.includes("/")) return;
    let path = "homepage" + history.location.pathname;
    setPath(path.split("/"));
  }, [history]);
  return (
    <div className="body-title-container">
      <label.bodyTitle>{path.join(" / ")}</label.bodyTitle>
    </div>
  );
}
