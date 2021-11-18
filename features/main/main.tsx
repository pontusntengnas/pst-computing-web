import { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import { Skill, SocialLink } from "../../types/types";
import { About } from "../about/about";
import { Bio } from "../bio/bio";
import { Contact } from "../contact/contact";
import { HorizontalDivider } from "../core-ui/building-blocks/dividers/horizontal-divider";
import { Row } from "../core-ui/building-blocks/row/row";
import { Space } from "../core-ui/building-blocks/space/space";
import { Stack } from "../core-ui/building-blocks/stack/stack";
import { toCssVar } from "../core-ui/colors/colors";
import { BodyText } from "../core-ui/text/body-text";
import { Header } from "../core-ui/text/header";
import { Skills } from "../skills/skills";
import me from "./images/me.webp";

interface Props {
  name: string;
  subTitle: string;
  skills: Array<Skill>;
  socialLinks: Array<SocialLink>;
}

export const Main: NextPage<Props> = ({
  name,
  subTitle,
  socialLinks,
  skills,
}) => {
  return (
    <Stack gap={0} flex={1} height={"100%"}>
      <Space height={20} />
      <Row backgroundColor={toCssVar("white")} flexWrap={"wrap"} centerContent>
        <>
          <Row animations={["fade-in-left"]}>
            <Image
              src={me}
              alt={name}
              placeholder={"blur"}
              width={170}
              height={170}
            />
          </Row>
          <Space width={30} />
          <Stack animations={["fade-in-right"]} centerContent>
            <Header text={name} />
            <BodyText text={subTitle} />
            <Contact socialLinks={socialLinks} />
          </Stack>
        </>
      </Row>
      <Space height={20} />
      <HorizontalDivider width={"70%"} />
      <Space height={10} />
      <Bio />
      <Skills skills={skills} />
      <About />
    </Stack>
  );
};
