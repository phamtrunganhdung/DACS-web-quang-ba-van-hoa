import { ButtonFloatLeft } from "@/components/Button";
import { label } from "@/components/Label";
import "./index.less";
import { useEffect, useState } from "react";
import { useLocation } from "umi";
import { getParameterByName } from "@/utils";
import { artifactsData } from "../data";
import BodyTitle from "@/components/BodyTitle";

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
    </div>
  ) : (
    <div style={{ height: "calc(100vh - 125px)" }}>
      <label.xl>Không tìm thấy thông tin hiện vật</label.xl>
    </div>
  );
}
