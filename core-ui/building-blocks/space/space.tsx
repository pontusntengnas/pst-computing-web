import * as React from "react";

interface Props {
  width?: number;
  height?: number;
}

export const Space: React.FC<Props> = ({ width, height }) => (
  <div
    style={{
      minWidth: width ? width : 2,
      minHeight: height ? height : 2,
      display: "flex",
    }}
  ></div>
);
