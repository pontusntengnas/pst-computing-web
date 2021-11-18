import * as React from "react";
import { SocialLink } from "../../types/types";
import { Row } from "../core-ui/building-blocks/row/row";
import { Space } from "../core-ui/building-blocks/space/space";
import { TextLink } from "../core-ui/link/text-link";

interface Props {
  socialLinks: Array<SocialLink>;
}

export const Contact: React.VFC<Props> = ({ socialLinks }) => {
  return (
    <Row>
      {socialLinks.map(({ url, name }, index) => (
        <Row key={name}>
          <TextLink url={url} text={name} newTab />
          <Space width={10} />
          {index === socialLinks.length - 1 ? "" : " - "}
          <Space width={5} />
        </Row>
      ))}
    </Row>
  );
};
