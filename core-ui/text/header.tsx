import * as React from "react";

interface Props {
  text: string;
  size?: 1 | 2 | 3 | 4;
}

export const Header: React.FC<Props> = ({ text, size }) => {
  const headerSize = size ?? 1;

  switch (headerSize) {
    case 1:
      return <h1>{text}</h1>;
    case 2:
      return <h2>{text}</h2>;
    case 3:
      return <h3>{text}</h3>;
    case 4:
      return <h4>{text}</h4>;
  }
};
