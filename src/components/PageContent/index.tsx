import React from "react";
import "./index.less";
import { label } from "@/components/Label";
import moment from "moment";
export interface IPageContent {
  title: string | null;
  showDateSubmitted: boolean;
  dateSubmitted: string | null;
  content: any;
}
export default function PageContent({
  title,
  dateSubmitted,
  content,
  showDateSubmitted,
}: IPageContent) {
  return (
    <div className="cpn-page-content-container">
      <label.xl className="title-pct">{title || ""}</label.xl>
      {showDateSubmitted && (
        <label.md className="date-submitted-pct">
          {dateSubmitted || moment().format("DD/MM/YYYY")}
        </label.md>
      )}
      <div className="content">{content && content}</div>
    </div>
  );
}
