import "./index.less";

import React from "react";
export interface IRightBoxContent {
  key: any;
  title: string;
  date: string | null;
  content: string;
}
export interface IRightBox {
  header: string;
  key: any;
}

export default function RightBox() {
  return <div className="right-box-container">RightBox</div>;
}
