import React, { useEffect, useState } from "react";
import "./index.less";
import { locationData, detailsData } from "../data";
import { history, useLocation } from "umi";
import { label } from "@/components/Label";
import { getParameterByName } from "@/utils";
import PageContent from "@/components/PageContent";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import CommentForm from "@/components/CommentForm";
import RightBox from "@/components/RightBox";
import { rightBoxData } from "../data";
export default function DetailsLocation() {
  const [detailsLocation, setDetailsLocation] = useState<any>(null);
  const location = useLocation();
  useEffect(() => {
    let idFromUrl: string | null = getParameterByName("id");
    let lctInfo = locationData.find((x: { id: string }) => x.id === idFromUrl);
    setDetailsLocation(lctInfo);
    window.scrollTo(0, 0);
  }, [location]);

  return detailsLocation ? (
    <div
      className={`detail-location-container location-${detailsLocation?.id}`}
    >
      {detailsLocation?.name && <BodyTitle details={detailsLocation?.name} />}
      <ButtonFloatLeft />
      <PageContent
        showDateSubmitted={false}
        title={detailsLocation.name}
        dateSubmitted={null}
        content={
          <div className="detail-location-content">
            {
              detailsData?.find((x: any) => x.id === detailsLocation?.id)
                ?.content
            }
            <CommentForm />
          </div>
        }
        rightContent={
          <div className="detail-location-right-content">
            <RightBox
              header="Địa điểm"
              id="lct"
              data={rightBoxData}
              pathRedirect="/news/location/details-location"
            ></RightBox>
          </div>
        }
      />
    </div>
  ) : (
    <div style={{ height: "calc(100vh - 125px)" }}>
      <label.xl>Không tìm thấy địa điểm</label.xl>
    </div>
  );
}
