import * as React from "react";

interface Props {
  url: string;
  text: string;
  newTab?: boolean;
}

export const TextLink: React.FC<Props> = ({ url, text, newTab }) => (
  <a href={url} target={newTab ? "_blank" : undefined} rel="noreferrer">
    {text}
  </a>
);
