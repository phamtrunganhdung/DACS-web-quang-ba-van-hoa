import pic1 from "@/assets/scenePic/pic1.jpg";
import pic2 from "@/assets/scenePic/pic2.jpg";
import pic3 from "@/assets/scenePic/pic3.jpg";
import pic4 from "@/assets/scenePic/pic4.jpg";
import baoTangLD from "@/assets/scenePic/baotangLD.png";
import XQSuquan from "@/assets/scenePic/xqDLsuquan.jpg";
import { Carousel } from "antd";
import { label } from "@/components/Label";
import "./index.less";
import { button } from "@/components/Button";
import { useEffect } from "react";
export default function HomePage() {
  const carouselData = [pic1, pic2, pic3, pic4];
  return (
    <div className="homepage-container">
      <div className="carousel-container">
        <Carousel autoplay>
          {carouselData.map((item, index) => (
            <div key={index} className="carousel-img">
              <img src={item} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="homepage-content">
        <div className="on-side-left">
          <div className="text">
            <label.xl>BẢO TÀNG LÂM ĐỒNG</label.xl>
            <p>
              Bảo tàng Lâm Đồng là nơi trưng bày các hiện vật truyền thống và
              lịch sử của địa phương, đặc biệt là những hiện vật thể hiện truyền
              thống văn hóa của vùng đất Lâm Đồng...
            </p>
            <button.primary title="ĐỌC THÊM" />
          </div>
          <div className="picture">
            <img src={baoTangLD} />
          </div>
        </div>
        <div className="on-side-right">
          <div className="text">
            <label.xl>XQ ĐÀ LẠT SỬ QUÁN</label.xl>
            <p>
              Đối với những du khách dành sự yêu thích cho bộ môn thêu tranh
              nghệ thuật. XQ sử quán là một cái tên không còn xa lạ. Qua bàn tay
              khéo léo của các nghệ nhân tại XQ sử quán đã thổi hồn vào những
              bức tranh thêu. Đem đến một sức sống với và làm nổi bật vẻ đẹp
              tinh túy của nghệ thuật...
            </p>
            <button.primary title="ĐỌC THÊM" />
          </div>
          <div className="picture">
            <img src={XQSuquan} />
          </div>
        </div>
      </div>
    </div>
  );
}
