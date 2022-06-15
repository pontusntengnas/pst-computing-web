import Image from "next/image";
import * as React from "react";
import { Row } from "../../core-ui/building-blocks/row/row";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { toCssVar } from "../../core-ui/colors/colors";
import { useScreenSize } from "../../core-ui/hooks/use-screen-size";
import { BodyText } from "../../core-ui/text/body-text";
import { Header } from "../../core-ui/text/header";
import { Details, SocialLink } from "../../data-fetchers/profile/types";
import { Contact } from "../contact/contact";
import me from "./images/me.webp";

interface Props {
  details: Details;
  socialLinks: Array<SocialLink>;
}

const smallScreenLimit = 600;

export const HeaderCard: React.FC<Props> = ({ details, socialLinks }) => {
  const { width } = useScreenSize();
  const isSmallScreen = width && width <= smallScreenLimit;

  const name = `${details.name} ${details.lastName}`;
  const subTitle = `${details.description} Based in ${details.location}.`;

  return (
    <Row backgroundColor={toCssVar("white")} flexWrap={"wrap"} centerContent>
      <>
        <Row animations={["fade-in-left"]}>
          <Image
            src={me}
            alt={name}
            placeholder={"blur"}
            width={170}
            height={170}
            quality={100}
          />
        </Row>
        {!isSmallScreen && <Space width={30} />}
        <Stack animations={["fade-in-right"]} centerContent>
          {isSmallScreen && <Space height={10} />}
          <Header text={name} size={isSmallScreen ? 2 : 1} />
          <BodyText text={subTitle} />
          <Contact socialLinks={socialLinks} />
        </Stack>
      </>
    </Row>
  );
};
