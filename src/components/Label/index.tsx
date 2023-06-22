import "./index.less";
export const label = {
  md: ({ style, children, className = "", onClick }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 13, fontWeight: 400 }}
        onClick={onClick}
      >
        {children}
      </span>
    );
  },
  lg: ({ style, children, className, onClick }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 15, fontWeight: 500 }}
        onClick={onClick}
      >
        {children}
      </span>
    );
  },
  xl: ({ style, children, className, onClick }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 19, fontWeight: 600 }}
        onClick={onClick}
      >
        {children}
      </span>
    );
  },
  xxl: ({ style, children, className, onClick }: any) => {
    return (
      <span
        className={`label-component ${className}`}
        style={{ ...style, fontSize: 28, fontWeight: 600 }}
        onClick={onClick}
      >
        {children}
      </span>
    );
  },
  bodyTitle: ({ style, children, className, onClick }: any) => {
    return (
      <span
        className={`label-component label-body-title ${className}`}
        style={{ ...style, fontSize: 15, fontWeight: 500, color: "#0c6122" }}
        onClick={onClick}
      >
        {children?.toUpperCase()}
      </span>
    );
  },
};
