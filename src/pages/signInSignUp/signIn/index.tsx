import BodyTitle from "@/components/BodyTitle/index";
import React from "react";
import { label } from "@/components/Label";
import { input } from "@/components/Input";
import { button } from "@/components/Button";
import { useModel } from "umi";
import "./index.less";

export default function SignIn() {
  const { updatePath } = useModel("path");
  return (
    <div className="sign-in-container">
      <BodyTitle />
      <div className="sign-in-content">
        <label.xxl>ĐĂNG KÝ</label.xxl>
        <div className="form-sign-in">
          <input.normal placeholder="Tài khoản" />
          <input.normal placeholder="Mật khẩu" />
          <button.primary title="Đăng nhập" />
          <p className="link-redirect-sign-in-up">Quên mật khẩu ?</p>
        </div>
        <label.lg>
          Bạn chưa có tài khoản? Đăng ký
          <i
            className="link-redirect-sign-in-up"
            onClick={() => {
              updatePath("/sign-up");
            }}
          >
            tại đây
          </i>
        </label.lg>
        <div className="other-sign-in">
          <label.xl>Đăng nhập bằng FaceBook hoặc Google</label.xl>
          <div className="btn-other-sign-in">
            <button.primary
              title="Facebook"
              style={{ background: "rgb(61 75 197)" }}
            />
            <button.primary
              title="Google"
              style={{ background: "rgb(241 47 82)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
