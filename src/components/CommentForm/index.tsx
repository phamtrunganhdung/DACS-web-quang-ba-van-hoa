import "./index.less";
import React from "react";
import { label } from "@/components/Label";
import { input } from "@/components/Input";
import { button } from "@/components/Button";

export default function CommentForm({ data }: any) {
  return (
    <div className="comment-content">
      <div className="total-coment">
        <label.lg>
          <strong>{`Bình luận (${data?.length || 0})`}</strong>
        </label.lg>
      </div>
      {data &&
        data?.length > 0 &&
        data.map((item: any) => {
          return (
            <div className="comment-line" key={item.key}>
              <img src={item.img} />
              <div className="text-info">
                <label.lg>
                  <strong>{item.user}</strong>
                </label.lg>
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
        <div className="form-info">
          <input.normal placeholder="Họ tên" />
          <input.normal placeholder="Email" />
        </div>
        <input.comment rows="8" />
        <button.primary title="Gửi bình luận" />
      </div>
    </div>
  );
}
