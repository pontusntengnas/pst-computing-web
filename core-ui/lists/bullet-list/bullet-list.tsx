import * as React from "react";
import { Row } from "../../building-blocks/row/row";
import { Space } from "../../building-blocks/space/space";
import { BodyText } from "../../text/body-text";

interface Props {
  items: Array<string>;
}

export const BulletList: React.VFC<Props> = ({ items }) => (
  <>
    {items.map((item) => (
      <Row key={item}>
        <Space width={30} />
        <BodyText text={`+ ${item}`} />
      </Row>
    ))}
  </>
);
