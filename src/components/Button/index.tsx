import flFb from "@/assets/flFacebook.svg";
import flHome from "@/assets/flHome.svg";
import flMail from "@/assets/flMail.svg";
import "./index.less";
export const button = {
  primary: (
    { title, className = "", onClick, ...anotherProps }: any,
    ref: any
  ) => {
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
  flHome: ({ className, onClick, ...anotherProps }: any, ref: any) => {
    return (
      <div
        className={`btn-component-float-left btn-component-float-left-home ${className}`}
        onClick={onClick}
        {...anotherProps}
      >
        <img src={flHome} style={{ width: 30 }} />
      </div>
    );
  },
  flFb: ({ className, onClick, ...anotherProps }: any, ref: any) => {
    return (
      <div
        className={`btn-component-float-left btn-component-float-left-fb ${className}`}
        onClick={onClick}
        {...anotherProps}
      >
        <img src={flFb} style={{ width: 15 }} />
      </div>
    );
  },
  flMail: ({ className, onClick, ...anotherProps }: any, ref: any) => {
    return (
      <div
        className={`btn-component-float-left btn-component-float-left-mail ${className}`}
        onClick={onClick}
        {...anotherProps}
      >
        <img src={flMail} style={{ width: 25 }} />
      </div>
    );
  },
};

export const ButtonFloatLeft = () => {
  return (
    <div>
      <button.flHome />
      <button.flFb />
      <button.flMail />
    </div>
  );
};
