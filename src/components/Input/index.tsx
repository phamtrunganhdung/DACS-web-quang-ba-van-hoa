import { Input, InputNumber } from "antd";
import "./index.less";
import React from "react";

export const input = {
  normal: ({ value, onChange, style, ...anotherProps }: any, ref: any) => {
    return (
      <div className="component-input-container">
        <Input
          value={value}
          onChange={onChange}
          ref={ref}
          style={{ ...style }}
          {...anotherProps}
        />
      </div>
    );
  },
  number: () => {
    return (
      <div className="component-input-container">
        <InputNumber />
      </div>
    );
  },
  comment: () => {
    return (
      <div className="component-input-container">
        <textarea></textarea>
      </div>
    );
  },
};
