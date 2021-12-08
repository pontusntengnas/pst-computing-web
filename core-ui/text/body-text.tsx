import * as React from "react";

interface Props {
  text: string;
  size?: "STANDARD" | "SMALL";
  centered?: boolean;
}

export const BodyText: React.VFC<Props> = ({ text, size, centered }) => {
  const fontSize = size === "SMALL" ? 14 : undefined;
  const textAlign = centered ? "center" : undefined;

  return <p style={{ fontSize, textAlign }}>{text}</p>;
};
