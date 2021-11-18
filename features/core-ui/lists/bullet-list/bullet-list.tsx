import * as React from "react";

interface Props {
  items: Array<string>;
}

export const BulletList: React.VFC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
