import React from "react";
import { label } from "@/components/Label/index";
import { videoData } from "./data";

export default function Video() {
  return (
    <div className="video">
      {videoData?.length > 0 &&
        videoData?.map((item: any, index: number) => {
          return (
            <div className="video-box" key={index}>
              <div className="video-play">
                <iframe src={item?.video}></iframe>
              </div>
              <div className="video-info">
                <div className="video-title">{item?.name}</div>
                <div className="video-content">
                  <label.lg>{`Tác giả : ${item?.author}`}</label.lg>
                  <label.lg>{`Ngày đăng : ${item?.submittedDate}`}</label.lg>
                  <div className="origin-link">
                    <label.lg>Xem video gốc</label.lg>
                    <i>
                      <a href={item?.originLink} target="_blank">
                        <label.lg>tại đây</label.lg>
                      </a>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
