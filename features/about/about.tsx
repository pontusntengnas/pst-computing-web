import Link from "next/link";
import * as React from "react";
import { Row } from "../core-ui/building-blocks/row/row";
import { Space } from "../core-ui/building-blocks/space/space";
import { BodyText } from "../core-ui/text/body-text";

interface Props {}

export const About: React.VFC<Props> = () => (
  <Row centerContent>
    <BodyText
      text={`Version ${process.env.NEXT_PUBLIC_APP_VERSION} - `}
      size={"SMALL"}
    />
    <Space width={10} />
    <Link href="/acknowledgments">
      <a style={{ fontSize: 14 }}>Acknowledgments</a>
    </Link>
  </Row>
);
