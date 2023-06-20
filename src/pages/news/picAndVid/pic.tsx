import React, { useState } from "react";
import { pictureData } from "./data";
import { Modal } from "antd";
import leftIcon from "@/assets/left.svg";
import rightIcon from "@/assets/right.svg";

export default function Picture() {
  const [picSl, setPicSl] = useState<string | null>(null);
  const [viewPicIdx, setViewPicIdx] = useState<number>(0);

  return (
    <div className="picture">
      {picSl && (
        <Modal
          width={700}
          title={picSl?.name || ""}
          open={true}
          onCancel={() => {
            setPicSl(null);
            setViewPicIdx(0);
          }}
          footer={null}
        >
          <div className="details-pic-container">
            <div className="btn-move">
              <button
                onClick={() => {
                  setViewPicIdx(
                    viewPicIdx === 0
                      ? picSl?.listImg?.length - 1
                      : viewPicIdx - 1
                  );
                }}
              >
                <img src={leftIcon}></img>
              </button>
            </div>
            <div className="details-pic">
              <div className="box-img">
                <img src={picSl?.listImg[viewPicIdx || 0]}></img>
              </div>
              <div className="box-title">{`Ảnh ${viewPicIdx + 1}/${
                picSl?.listImg?.length || 0
              }`}</div>
            </div>
            <div className=" btn-move btn-move-right">
              <button
                onClick={() => {
                  setViewPicIdx(
                    viewPicIdx < picSl?.listImg?.length - 1 ? viewPicIdx + 1 : 0
                  );
                }}
              >
                <img src={rightIcon}></img>
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div className="content-pic">
        {pictureData &&
          pictureData?.length > 0 &&
          pictureData?.map((item: any, index: number) => {
            return (
              <div
                className="picture-box"
                key={index}
                onClick={() => {
                  setPicSl(item);
                }}
              >
                <div className="title-picture-box">{item?.name}</div>
                <div className="img-picture-box">
                  <div className="first-pic">
                    <img src={item?.listImg[0]} />
                  </div>
                  <div className="other-pic">
                    {item?.listImg?.length > 0 &&
                      item?.listImg
                        ?.slice(1, 4)
                        ?.map((itm: any, idx: number) => {
                          return idx === 2 ? (
                            <div className="img-n-box img-n-more" key={idx}>
                              <img src={itm} />
                              <div className="shadow-img-n-box">
                                {`+ ${item?.listImg?.length - 3}`}
                              </div>
                            </div>
                          ) : (
                            <div className="img-n-box" key={idx}>
                              <img src={itm} />
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
