import { label } from "@/components/Label";
import { routes } from "@/routes";
import { useEffect, useState } from "react";
import { history } from "umi";
import "./index.less";

export interface IRoutes {
  path: string;
  name: string;
}

export default function BodyTitle({ details = "" }: any) {
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    if (!history.location.pathname.includes("/")) return;
    let path = "homepage" + history.location.pathname;
    setPath(path.split("/"));
  }, [history]);

  const handleRenderBodyTitle = (path: string[]) => {
    let grPath: IRoutes[] = [];
    routes.map((i: any) => {
      if (i.children.length > 0) {
        i.children.map((j: any) => {
          let childObj: IRoutes = {
            path: j.path,
            name: j.name,
          };
          grPath.push(childObj);
        });
      }
      let obj: IRoutes = {
        path: i.path,
        name: i.name,
      };
      grPath.push(obj);
    });

    let nameArr = path.map((i: string) => {
      let name: string =
        grPath.find((x: IRoutes) => {
          let arrPath = x.path.split("/");
          if (i === "homepage") {
            return x.path === "/";
          } else {
            return arrPath[arrPath.length - 1] === i;
          }
        })?.name || "";
      return name;
    });
    let bdTitle: string = nameArr.join(" > ");
    if (bdTitle.includes(">  >")) {
      bdTitle = bdTitle.replaceAll(">  >", " > ");
    }

    return bdTitle;
  };

  return (
    <div className="body-title-container">
      <label.bodyTitle>{handleRenderBodyTitle(path) + details}</label.bodyTitle>
    </div>
  );
}
