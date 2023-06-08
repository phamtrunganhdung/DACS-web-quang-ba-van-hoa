import "./index.less";
import { label } from "@/components/Label";
import React from "react";
import { history } from "umi";
export interface IRightBoxContent {
  key: any;
  title: string;
  date: string | null;
  content: any;
  img: any;
}
export interface IRightBox {
  header: string;
  key: any;
  data: IRightBoxContent;
}

export default function RightBox({ header, key, data }: IRightBox) {
  return (
    <div className="right-box-container" key={key}>
      <div className="right-box-header">
        <div className="right-box-title">
          <label.xl>{header || ""}</label.xl>
        </div>
      </div>
      <div className="right-box-content">
        {data &&
          data?.length > 0 &&
          data.map((i: IRightBoxContent) => {
            return (
              <div className="r-child-box" key={i?.key}>
                <img
                  src={i?.img}
                  onClick={() => {
                    history.push(
                      `/news/location/details-location?id=${i?.key}`
                    );
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
