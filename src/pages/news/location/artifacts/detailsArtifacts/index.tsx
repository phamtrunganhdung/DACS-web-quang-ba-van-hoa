import { useEffect, useState } from "react";
import "./index.less";
import { getParameterByName } from "@/utils";
import { artifactsDetailsData, rightBoxDataATF } from "../../data";
import { useLocation } from "umi";
import { label } from "@/components/Label";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import PageContent from "@/components/PageContent";
import CommentForm from "@/components/CommentForm";
import RightBox from "@/components/RightBox";
export default function DetailsArtifacts() {
  const [detailsArtifacts, setDetailsArtifacts] = useState<any>(null);
  const location = useLocation();
  useEffect(() => {
    let idFromUrl: string | null = getParameterByName("id");

    let artifactsInfo = artifactsDetailsData.find(
      (x: { id: string }) => x.id === idFromUrl
    );
    setDetailsArtifacts(artifactsInfo);
    window.scrollTo(0, 0);
  }, [location]);

  return detailsArtifacts ? (
    <div className="details-artifacts-container">
      {detailsArtifacts?.name && <BodyTitle details={detailsArtifacts?.name} />}
      <ButtonFloatLeft />
      <PageContent
        showDateSubmitted
        title={detailsArtifacts?.name}
        dateSubmitted={"11/06/2023"}
        content={
          <div className="details-artifacts-content">
            {detailsArtifacts?.content && detailsArtifacts?.content}
            <CommentForm />
          </div>
        }
        rightContent={
          <div className="details-artifacts-right-content">
            <RightBox
              header="Hiện vật khác"
              id="atf"
              data={rightBoxDataATF}
            ></RightBox>
          </div>
        }
      />
    </div>
  ) : (
    <div style={{ height: "calc(100vh - 125px)" }}>
      <label.xl>Không tìm thấy thông tin hiện vật</label.xl>
    </div>
  );
}
