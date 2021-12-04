import * as React from "react";
import { useEffect, useState } from "react";
import { Row } from "../../core-ui/building-blocks/row/row";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { TextLink } from "../../core-ui/link/text-link";
import { SocialLink } from "../../data-fetchers/profile/types";

interface Props {
  socialLinks: Array<SocialLink>;
}

const smallScreenLimit = 600;

export const Contact: React.VFC<Props> = ({ socialLinks }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () =>
      setIsSmallScreen(window.innerWidth < smallScreenLimit);

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return isSmallScreen ? (
    <Stack centerContent>
      <SocialLinks socialLinks={socialLinks} />
    </Stack>
  ) : (
    <Row flexWrap={"wrap"}>
      <SocialLinks socialLinks={socialLinks} />
    </Row>
  );
};

const SocialLinks: React.VFC<Props> = ({ socialLinks }) => (
  <>
    {socialLinks.map(({ url, name }, index) => (
      <React.Fragment key={name}>
        <Row>
          <TextLink url={url} text={name} newTab />
          <Space width={10} />
        </Row>
        {index === socialLinks.length - 1 ? "" : " - "}
        <Space width={5} />
      </React.Fragment>
    ))}
  </>
);
