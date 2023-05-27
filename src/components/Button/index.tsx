import "./index.less";
export const button = {
  primary: ({ title, className, onClick, ...anotherProps }: any, ref: any) => {
    return (
      <button
        className={`btn-component btn-primary ${className}`}
        onClick={onClick}
        {...anotherProps}
      >
        {title ? title : "Button"}
      </button>
    );
  },
  light: ({ title, className, onClick, ...anotherProps }: any, ref: any) => {
    return (
      <button
        className={`btn-component btn-light ${className}`}
        onClick={onClick}
        {...anotherProps}
      >
        {title ? title : "Button"}
      </button>
    );
  },
};
