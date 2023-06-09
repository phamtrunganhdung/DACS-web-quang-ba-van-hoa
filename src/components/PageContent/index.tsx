import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.less";
import { label } from "@/components/Label";
import moment from "moment";
export interface IPageContent {
  title: string | null;
  showDateSubmitted: boolean;
  dateSubmitted: string | null;
  content: any;
  rightContent: any;
}
export default function PageContent({
  title,
  dateSubmitted,
  content,
  showDateSubmitted,
  rightContent,
}: IPageContent) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`cpn-page-content-container`}>
      <label.xl className="title-pct">{title || ""}</label.xl>
      {showDateSubmitted && (
        <label.md className="date-submitted-pct">
          {dateSubmitted || moment().format("DD/MM/YYYY")}
        </label.md>
      )}
      <div className="content" style={{ marginTop: 10 }}>
        {content && content}
      </div>
      <div className="right-content">{rightContent && rightContent}</div>
    </div>
  );
}
