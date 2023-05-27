import "./index.less";
export const label = {
  md: ({ style, children, className }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 13, fontWeight: 400 }}
      >
        {children}
      </span>
    );
  },
  lg: ({ style, children, className }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 15, fontWeight: 500 }}
      >
        {children}
      </span>
    );
  },
  xl: ({ style, children, className }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 18, fontWeight: 600 }}
      >
        {children}
      </span>
    );
  },
  xxl: ({ style, children, className }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 30, fontWeight: 600 }}
      >
        {children}
      </span>
    );
  },
};
