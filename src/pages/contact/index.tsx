import React from "react";
import "./index.less";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import { input } from "@/components/Input";
import { label } from "@/components/Label";
import { button } from "@/components/Button";
import home from "@/assets/flHome.svg";
import phone from "@/assets/phone.svg";
import mail from "@/assets/mailLight.svg";
import ggmap from "@/assets/ggmap.png";
import PageContent from "@/components/PageContent/index";

export default function Contact() {
  return (
    <div className="contact-container">
      <BodyTitle />
      <ButtonFloatLeft />
      <PageContent
        content={
          <div className="contact-content">
            <img src={ggmap} />
            <div className="contact-box">
              <div className="contact-form">
                <div className="contact-form-info">
                  <input.normal placeholder="Họ tên" />
                  <input.normal placeholder="Email" />
                </div>
                <input.comment rows="8" />
                <button.primary title="Gửi liên hệ" />
              </div>
              <div className="contact-info">
                <label.xl>DalatKIT</label.xl>
                <label.lg>
                  Tổng hợp những chương trình triển lãm, giới thiệu quảng bá văn
                  hóa Việt Nam
                </label.lg>
                <div className="list-btn-contact">
                  <div className="btn-contact">
                    <div className="img-contact">
                      <img src={home} />
                    </div>
                    <label.lg>1A -2B Street - 3C District, Viet Nam</label.lg>
                  </div>
                  <div className="btn-contact">
                    <div className="img-contact">
                      <img src={phone} />
                    </div>
                    <label.lg>012345668</label.lg>
                  </div>
                  <div className="btn-contact">
                    <div className="img-contact">
                      <img src={mail} />
                    </div>
                    <label.lg>dalatkit@gmail.com</label.lg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
