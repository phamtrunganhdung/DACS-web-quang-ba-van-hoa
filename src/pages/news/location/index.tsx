import BodyTitle from "@/components/BodyTitle";
import "./index.less";
import { ButtonFloatLeft } from "@/components/Button";
import { label } from "@/components/Label";
import PageContent from "@/components/PageContent";
import { locationData } from "./data";
import { useModel } from "umi";
import infoIcon from "@/assets/info.svg";
import artifactIcon from "@/assets/artifacts.svg";

export default function Location() {
  const { updatePath } = useModel("path");
  return (
    <div className="location-container">
      <BodyTitle />
      <ButtonFloatLeft />
      <PageContent
        rightContent={null}
        showDateSubmitted={false}
        title={null}
        dateSubmitted={null}
        content={
          <div className="location-content">
            {locationData &&
              locationData?.length > 0 &&
              locationData.map((item: any) => {
                return (
                  <div className="location-box" key={item.id}>
                    <div className="hover-location-info">
                      <div
                        className="detail-location-redirect"
                        onClick={() => {
                          updatePath(
                            `/news/location/details-location?id=${item.id}`
                          );
                        }}
                      >
                        <label.xl>Giới Thiệu</label.xl>
                        <img src={infoIcon} />
                      </div>
                      <div
                        className="artifacts-redirect"
                        onClick={() => {
                          updatePath(`/news/location/artifacts?id=${item.id}`);
                        }}
                      >
                        <label.xl>Hiện vật</label.xl>
                        <img src={artifactIcon} />
                      </div>
                    </div>
                    <img src={item.image} />
                    <ul className="location-info">
                      <li>
                        <label.lg>
                          <strong>{item.name}</strong>
                        </label.lg>
                      </li>
                      <li>
                        <label.lg>
                          <strong>{item.address}</strong>
                        </label.lg>
                      </li>
                      <li>
                        <label.lg>
                          <p style={{ color: "#3137B6", fontStyle: "italic" }}>
                            {item.email}
                          </p>
                        </label.lg>
                      </li>
                      <li>
                        <label.lg>
                          <strong>{item.openTimeDesc}</strong>
                        </label.lg>
                      </li>
                      <ul style={{ paddingLeft: 20 }}>
                        <li>
                          <label.lg>
                            <strong>Sáng: </strong>
                            {item.openTimeAM}
                          </label.lg>
                        </li>
                        <li>
                          <label.lg>
                            <strong>Chiều: </strong>
                            {item.openTimePM}
                          </label.lg>
                        </li>
                      </ul>
                    </ul>
                  </div>
                );
              })}
          </div>
        }
      />
    </div>
  );
}
