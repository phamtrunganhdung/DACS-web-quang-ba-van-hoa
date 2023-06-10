import { ButtonFloatLeft } from "@/components/Button";
import { label } from "@/components/Label";
import "./index.less";
import { useEffect, useState } from "react";
import { useLocation } from "umi";
import { getParameterByName } from "@/utils";
import { artifactsData } from "../data";
import BodyTitle from "@/components/BodyTitle";
import { Row, Col } from "antd";

export default function Artifacts() {
  const [artifacts, setArtifacts] = useState<any>(null);
  const location = useLocation();
  useEffect(() => {
    let idFromUrl: string | null = getParameterByName("id");

    let artifactsInfo = artifactsData.find(
      (x: { id: string }) => x.id === idFromUrl
    );
    setArtifacts(artifactsInfo);
    window.scrollTo(0, 0);
  }, [location]);
  return artifacts ? (
    <div className={`artifacts-container artifacts-${artifacts?.id}`}>
      {artifacts?.name && <BodyTitle details={artifacts?.name} />}
      <ButtonFloatLeft />
      <Row className="grid-artifacts" gutter={[20, 20]}>
        {artifacts?.lstArtifacts &&
          artifacts?.lstArtifacts?.length > 0 &&
          artifacts?.lstArtifacts?.map((item: any, index: number) => {
            return (
              <Col span={12} className="artifacts-box" key={index}>
                <img src={item?.img} />
                <div className="artifacts-box-info">
                  <label.xl>{item?.name}</label.xl>
                  <div className="artifacts-box-info-content">
                    {item?.content && item?.content}
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  ) : (
    <div style={{ height: "calc(100vh - 125px)" }}>
      <label.xl>Không tìm thấy thông tin hiện vật</label.xl>
    </div>
  );
}
