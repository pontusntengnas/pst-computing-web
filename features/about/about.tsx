import Link from "next/link";
import * as React from "react";
import { Row } from "../../core-ui/building-blocks/row/row";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { useScreenSize } from "../../core-ui/hooks/use-screen-size";
import { BodyText } from "../../core-ui/text/body-text";

const widthLimit = 1000;
const contentMargin = 4;

export const About: React.VFC = () => {
  const { width } = useScreenSize();

  return width && width >= widthLimit ? (
    <Stack centerContent>
      <Row centerContent>
        <AboutContent />
      </Row>
      <AcknowledgmentsLink />
      <Space height={10} />
    </Stack>
  ) : (
    <Stack centerContent>
      <AboutContent />
      <AcknowledgmentsLink />
      <Space height={10} />
    </Stack>
  );
};

const AboutContent: React.VFC = () => (
  <>
    <BodyText
      margin={contentMargin}
      centered
      text={`${process.env.NEXT_PUBLIC_APP_VERSION} ${process.env.NEXT_PUBLIC_VERCEL_ENV}`}
      size={"SMALL"}
    />
    <Space width={10} />
    <BodyText
      margin={contentMargin}
      centered
      text={`${
        process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
      } [${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7)}]`}
      size={"SMALL"}
    />
  </>
);

const AcknowledgmentsLink: React.VFC = () => (
  <Link href="/acknowledgments">
    <a style={{ fontSize: 14, margin: contentMargin }}>Acknowledgments</a>
  </Link>
);
