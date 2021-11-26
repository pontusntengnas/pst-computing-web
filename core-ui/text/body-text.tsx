import * as React from "react";

interface Props {
  text: string;
  size?: "STANDARD" | "SMALL";
}

export const BodyText: React.VFC<Props> = ({ text, size }) => {
  const fontSize = size === "SMALL" ? 14 : undefined;

  return <p style={{ fontSize }}>{text}</p>;
};
