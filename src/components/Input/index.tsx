import { Input, InputNumber } from "antd";
import "./index.less";
import React from "react";

export const input = {
  normal: (
    { value, onChange, style, className, ...anotherProps }: any,
    ref: any
  ) => {
    return (
      <Input
        className={`input-component ${className}`}
        value={value}
        onChange={onChange}
        ref={ref}
        style={{ ...style }}
        {...anotherProps}
      />
    );
  },
  number: () => {
    return <InputNumber />;
  },
  comment: () => {
    return <textarea></textarea>;
  },
};
