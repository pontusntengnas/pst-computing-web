import Link from "next/link";
import * as React from "react";
import { Row } from "../../core-ui/building-blocks/row/row";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { BodyText } from "../../core-ui/text/body-text";
import { Header } from "../../core-ui/text/header";

interface Props {}

export const Resume: React.VFC<Props> = () => {
  return (
    <Stack animations={["fade-in"]} flex={1}>
      <Row centerContent>
        <Header text={"Resume"} size={2} />
      </Row>
      <Row centerContent>
        <BodyText text={"Download my resume as a PDF"} />
        <Space width={12} />
        <Link href={"/cv-letter.pdf"}>
          <a>here</a>
        </Link>
        <BodyText text={"."} />
      </Row>
    </Stack>
  );
};
