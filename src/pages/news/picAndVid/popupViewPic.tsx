import React, { useState } from "react";
import { Modal } from "antd";
import leftIcon from "@/assets/left.svg";
import rightIcon from "@/assets/right.svg";

export default function PopupViewPic({ picSl, onClose }: any) {
  const [viewPicIdx, setViewPicIdx] = useState<number>(0);
  return (
    <div className="pop-view-pic-container">
      {picSl && (
        <Modal
          width={700}
          title={picSl?.name || ""}
          open={true}
          onCancel={() => {
            if (onClose) onClose();
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
    </div>
  );
}
