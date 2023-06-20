import React from "react";
import "./index.less";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import PageContent from "@/components/PageContent";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Picture from "./pic";
import Video from "./vid";

export default function PicAndVid() {
  const items: TabsProps["items"] = [
    {
      key: "pic",
      label: `Hình ảnh`,
      children: <Picture />,
    },
    {
      key: "vid",
      label: `Video`,
      children: <Video />,
    },
  ];
  return (
    <div className="pic-and-vid-container">
      <BodyTitle />
      <ButtonFloatLeft />
      <PageContent
        dateSubmitted={null}
        showDateSubmitted={false}
        title={null}
        rightContent={null}
        content={
          <div className="pic-and-vid-content">
            <Tabs defaultActiveKey="pic" items={items} />
          </div>
        }
      />
    </div>
  );
}
