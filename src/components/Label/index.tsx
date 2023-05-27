export const label = {
  md: ({ style, children }: any) => {
    return (
      <span style={{ ...style, fontSize: 16, fontWeight: 400, lineHeight: 19 }}>
        {children}
      </span>
    );
  },
  lg: ({ style, children }: any) => {
    return (
      <span style={{ ...style, fontSize: 18, fontWeight: 500, lineHeight: 19 }}>
        {children}
      </span>
    );
  },
  xl: ({ style, children }: any) => {
    return (
      <span style={{ ...style, fontSize: 20, fontWeight: 600, lineHeight: 19 }}>
        {children}
      </span>
    );
  },
  xxl: ({ style, children }: any) => {
    return (
      <span style={{ ...style, fontSize: 30, fontWeight: 600, lineHeight: 30 }}>
        {children}
      </span>
    );
  },
};
