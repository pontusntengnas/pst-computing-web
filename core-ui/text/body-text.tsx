import * as React from "react";

interface Props {
  text: string;
  size?: "STANDARD" | "SMALL";
  centered?: boolean;
  margin?: string | number;
}

export const BodyText: React.VFC<Props> = ({
  text,
  size,
  centered,
  margin,
}) => {
  const fontSize = size === "SMALL" ? 14 : undefined;
  const textAlign = centered ? "center" : undefined;

  return <p style={{ fontSize, textAlign, margin }}>{text}</p>;
};
