import React, { useState } from "react";
import "./index.less";
import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft } from "@/components/Button";
import PageContent from "@/components/PageContent";
import { Col, Row } from "antd";
import { useModel } from "umi";
import { exhibitionData } from "./data";
import { label } from "@/components/Label";

export default function Exhibition() {
  const { updatePath } = useModel("path");

  return (
    <div className="exhibition-container">
      <BodyTitle />
      <ButtonFloatLeft />
      <PageContent
        showDateSubmitted={false}
        dateSubmitted={null}
        title={null}
        rightContent={null}
        content={
          <Row className="exhibition-content" gutter={[20, 20]}>
            {exhibitionData &&
              exhibitionData?.length > 0 &&
              exhibitionData?.map((item: any, index: number) => {
                return (
                  <Col xxl={8} lg={12} key={index}>
                    <div className="title-exhibition">
                      <strong>
                        <label.lg>{item?.name}</label.lg>
                      </strong>
                    </div>
                    <div className="box-exhibition">
                      <strong>
                        <label.lg>{item?.title}</label.lg>
                      </strong>
                      <div className="box-exhibition-content">
                        <img src={item?.image}></img>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        }
      />
    </div>
  );
}
