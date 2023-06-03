import React from "react";
import "./index.less";
import footerImg from "@/assets/footer.png";
import { label } from "@/components/Label";
import { input } from "@/components/Input";
import { button } from "@/components/Button";
import iconF from "@/assets/icon F.svg";
import iconI from "@/assets/icon I.svg";
import iconP from "@/assets/icon P.svg";
import iconT from "@/assets/icon T.svg";

export default function Footer() {
  const listSocialBtn: any = [iconF, iconI, iconP, iconT];
  return (
    <div className="footer-component-container">
      <img src={footerImg} />
      <div className="title-footer">
        <label.xxl>Đăng ký nhận tin</label.xxl>
        <label.xl>
          Tổng hợp những tin tức mới nhất về văn hóa và bản sắc dân tộc Việt
          Nam, thông tin về các cuộc triển lãm bao gồm thời gian địa điểm và các
          thông tin khác
        </label.xl>
      </div>
      <div className="form-footer">
        <input.normal />
        <button.primary title="Đăng ký" />
      </div>
      <div className="info-footer">
        <div className="col-info">
          <label.xl className="title-info-footer">Liên hệ</label.xl>
          <label.lg>
            <strong>Địa chỉ: </strong> 1A -2B Street - 3C District, Viet Nam
          </label.lg>
          <label.lg>
            <strong>Điện thoại: </strong>0123456789
          </label.lg>
          <label.lg>
            <strong>Email: </strong>dalatkit@gmail.com
          </label.lg>
        </div>
        <div className="col-info">
          <label.xl className="title-info-footer">Kết nối</label.xl>

          <div className="social-btn">
            {listSocialBtn.map((i: any, index: number) => (
              <img src={i} key={index}></img>
            ))}
          </div>
        </div>
        <div className="col-info">
          <label.xl className="title-info-footer">Thông tin</label.xl>
          <label.lg>
            <strong>Tham quan</strong>
          </label.lg>
          <label.lg>
            <strong>Triển lãm</strong>
          </label.lg>
          <label.lg>
            <strong>Du lịch</strong>
          </label.lg>
        </div>
      </div>
    </div>
  );
}
