import React from "react";
import "./index.less";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import PageContent from "@/components/PageContent";
import { pictureData } from "./data";

export default function PicAndVid() {
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
            <div className="picture">
              <div className="title-pic-n-vid">Hình ảnh</div>
              <div className="content-pic">
                {pictureData &&
                  pictureData?.length > 0 &&
                  pictureData?.map((item: any, index: number) => {
                    return (
                      <div className="picture-box" key={index}>
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
                                    <div
                                      className="img-n-box img-n-more"
                                      key={idx}
                                    >
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
            <div className="video">
              <div className="title-pic-n-vid">Video</div>
            </div>
          </div>
        }
      />
    </div>
  );
}
