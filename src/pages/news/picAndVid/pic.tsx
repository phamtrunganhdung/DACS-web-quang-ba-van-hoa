import React, { useState } from "react";
import { pictureData } from "./data";
import PopupViewPic from "./popupViewPic";

export default function Picture() {
  const [picSl, setPicSl] = useState<string | null>(null);

  return (
    <div className="picture">
      <PopupViewPic picSl={picSl} onClose={() => setPicSl(null)} />
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
