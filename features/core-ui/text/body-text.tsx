import * as React from "react";

interface Props {
  text: string;
}

export const BodyText: React.VFC<Props> = ({ text }) => {
  return <p>{text}</p>;
};
