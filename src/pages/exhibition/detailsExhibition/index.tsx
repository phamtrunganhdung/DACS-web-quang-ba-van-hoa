import { useEffect, useState } from "react";
import "./index.less";
import { getParameterByName } from "@/utils";
import { exhibitionsDetailsData } from "../data";
import { useLocation } from "umi";
import { label } from "@/components/Label";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import PageContent from "@/components/PageContent";
import CommentForm from "@/components/CommentForm";
export default function DetailsExhibition() {
  const [detailsExhibition, setDetailsExhibition] = useState<any>(null);
  const location = useLocation();
  useEffect(() => {
    let idFromUrl: string | null = getParameterByName("id");

    let exhibitionInfo = exhibitionsDetailsData.find(
      (x: { id: string }) => x.id === idFromUrl
    );
    setDetailsExhibition(exhibitionInfo);
    window.scrollTo(0, 0);
  }, [location]);

  return detailsExhibition ? (
    <div className="details-exhibition-container">
      {detailsExhibition?.name && (
        <BodyTitle details={detailsExhibition?.name} />
      )}
      <ButtonFloatLeft />
      <PageContent
        showDateSubmitted
        title={detailsExhibition?.name}
        dateSubmitted={"11/06/2023"}
        content={
          <div className="details-exhibition-content">
            {detailsExhibition?.content && detailsExhibition?.content}
            <CommentForm />
          </div>
        }
        rightContent={null}
      />
    </div>
  ) : (
    <div style={{ height: "calc(100vh - 125px)" }}>
      <label.xl>Không tìm thấy thông tin triển lãm</label.xl>
    </div>
  );
}
