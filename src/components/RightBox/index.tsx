import "./index.less";
import { label } from "@/components/Label";
import React, { useEffect, useState } from "react";
import { history, useModel } from "umi";
export interface IRightBoxContent {
  key: string | number;
  title: string;
  date: string | null;
  content: any;
  img: any;
}
export interface IRightBox {
  header: string;
  id: string | number;
  data: IRightBoxContent[];
  pathRedirect: string;
}

export default function RightBox({
  header,
  id,
  data,
  pathRedirect,
}: IRightBox) {
  const { updatePath } = useModel("path");
  return (
    <div className="right-box-container" key={id}>
      <div className="right-box-header">
        <div className="right-box-title">
          <label.xl>{header || ""}</label.xl>
        </div>
      </div>
      <div className="right-box-content">
        {data &&
          data.length > 0 &&
          data.map((i: IRightBoxContent, index: number) => {
            return (
              <div className="r-child-box" key={index}>
                <img
                  src={i?.img}
                  onClick={() => {
                    updatePath(`${pathRedirect}?id=${i?.key}`);
                  }}
                />
                <div className="r-info-box">
                  <label.lg>
                    <strong>{i?.title}</strong>
                  </label.lg>
                  {i?.content && i?.content}
                  <label.lg>
                    <i>{i?.date}</i>
                  </label.lg>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
