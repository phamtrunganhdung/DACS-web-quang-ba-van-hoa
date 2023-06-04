import searchIcon from "@/assets/search.svg";
import { Input, InputNumber } from "antd";
import "./index.less";

export const input = {
  normal: (
    { value, onChange, style, className = "", ...anotherProps }: any,
    ref: any
  ) => {
    return (
      <Input
        className={`input-component input-normal ${className}`}
        value={value}
        onChange={onChange}
        ref={ref}
        style={{ ...style }}
        {...anotherProps}
      />
    );
  },
  header: (
    { value, onChange, style, className, ...anotherProps }: any,
    ref: any
  ) => {
    return (
      <Input
        className={`input-component input-header ${className}`}
        value={value}
        onChange={onChange}
        ref={ref}
        style={{ ...style }}
        suffix={<img src={searchIcon} style={{ height: 25 }} />}
        {...anotherProps}
      />
    );
  },
  number: () => {
    return <InputNumber />;
  },
  comment: ({
    value,
    onChange,
    style,
    className,
    rows,
    ...anotherProps
  }: any) => {
    return (
      <textarea
        className={`input-component input-comment ${className}`}
        value={value}
        onChange={onChange}
        style={{ ...style }}
        rows={rows}
        {...anotherProps}
      ></textarea>
    );
  },
};
