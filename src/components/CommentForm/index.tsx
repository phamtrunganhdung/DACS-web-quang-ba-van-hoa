import "./index.less";
import React, { useState } from "react";
import { label } from "@/components/Label";
import { input } from "@/components/Input";
import { button } from "@/components/Button";
import avtDefault from "@/assets/avatarDefault.svg";
import moment from "moment";

export default function CommentForm() {
  const [data, setData] = useState<any>([
    {
      key: "comment1",
      user: "Anh Dung",
      email: "1812745@dlu.edu.vn",
      date: "03/06/2023",
      img: avtDefault,
      comment: "Văn hóa Việt Nam thật là đa dạng và phong phú !!!",
    },
  ]);
  const [inputValue, setInputValue] = useState<any>({
    key: "",
    user: "",
    date: moment().format("DD/MM/YYYY"),
    email: "",
    img: avtDefault,
    comment: "",
  });
  return (
    <div className="comment-content">
      <div className="total-coment">
        <label.lg>
          <strong>{`Bình luận (${
            (data?.length < 6 ? data?.length : 5) || 0
          })`}</strong>
        </label.lg>
      </div>
      {data &&
        data?.length > 0 &&
        data.slice(0, 4).map((item: any) => {
          return (
            <div className="comment-line" key={item.key}>
              <img src={item.img} />
              <div className="text-info">
                <div
                  className="text-username"
                  style={{ display: "flex", alignItems: "center", gap: 5 }}
                >
                  <label.lg>
                    <strong>{item.user}</strong>
                  </label.lg>
                  <label.lg>
                    <i>{item.email}</i>
                  </label.lg>
                </div>
                <label.md>{item.date}</label.md>
                <label.lg>{item.comment}</label.lg>
              </div>
            </div>
          );
        })}
      <div className="submit-comment-form">
        <label.lg>
          <strong>Viết bình luận</strong>
        </label.lg>
        <div className="form-info" id="form-info-id">
          <input.normal
            placeholder="Họ tên"
            value={inputValue.user}
            onChange={(e: any) => {
              setInputValue((prev: any) => ({ ...prev, user: e.target.value }));
            }}
          />
          <input.normal
            placeholder="Email"
            value={inputValue.email}
            onChange={(e: any) => {
              setInputValue((prev: any) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <input.comment
          rows="8"
          value={inputValue.comment}
          onChange={(e: any) => {
            setInputValue((prev: any) => ({
              ...prev,
              comment: e.target.value,
            }));
          }}
        />
        <button.primary
          title="Gửi bình luận"
          onClick={() => {
            inputValue.key = Math.random().toString();
            setData((prev: any) => [inputValue, ...prev]);
            setInputValue({
              key: "",
              user: "",
              date: moment().format("DD/MM/YYYY"),
              email: "",
              img: avtDefault,
              comment: "",
            });
          }}
        />
      </div>
    </div>
  );
}
