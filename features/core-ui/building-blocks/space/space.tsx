import * as React from "react";

interface Props {
  width?: number;
}

export const Space: React.VFC<Props> = ({ width }) => {
  return <div style={{ width: width ? width : 2, display: "flex" }}></div>;
};
