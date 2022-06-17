import * as React from "react";

interface Props {
  text: string;
  size?: 1 | 2 | 3 | 4;
  marginBlockEnd?: string;
}

export const Header: React.FC<Props> = ({ text, size, marginBlockEnd }) => {
  const headerSize = size ?? 1;
  const style = { marginBlockEnd };

  switch (headerSize) {
    case 1:
      return <h1 style={style}>{text}</h1>;
    case 2:
      return <h2 style={style}>{text}</h2>;
    case 3:
      return <h3 style={style}>{text}</h3>;
    case 4:
      return <h4 style={style}>{text}</h4>;
  }
};
