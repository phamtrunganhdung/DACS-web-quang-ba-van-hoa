import pic1 from "@/assets/scenePic/pic1.jpg";
import pic2 from "@/assets/scenePic/pic2.jpg";
import pic3 from "@/assets/scenePic/pic3.jpg";
import pic4 from "@/assets/scenePic/pic4.jpg";
import { Carousel } from "antd";
import { label } from "@/components/Label";
import "./index.less";
import { button } from "@/components/Button";
import { homePageData } from "@/pages/homepage/data";

export const HomPageContent = ({ data, key }: any) => {
  return (
    <div className="homepage-content" key={key}>
      <div className="on-side-left">
        <div className="text">
          <label.xl>{data?.titleL}</label.xl>
          {data?.contentL}
          <button.primary title="ĐỌC THÊM" />
        </div>
        <div className="picture">
          <img src={data?.imgL} />
        </div>
      </div>
      <div className="on-side-right">
        <div className="text">
          <label.xl>{data?.titleR}</label.xl>
          {data?.contentR}
          <button.primary title="ĐỌC THÊM" />
        </div>
        <div className="picture">
          <img src={data?.imgR} />
        </div>
      </div>
    </div>
  );
};
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
      <Carousel autoplay>
        {homePageData.map((item: any, index: number) => (
          <HomPageContent data={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
