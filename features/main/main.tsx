import { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import { Skill, SocialLink } from "../../types/types";
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

export const Main: NextPage<Props> = ({ name, subTitle }) => {
  return (
    <Stack margin={10} padding={10}>
      <Row backgroundColor={toCssVar("white")}>
        <>
          <Stack animations={["fade-in-left"]}>
            <Image src={me} alt={name} placeholder={"blur"} />
          </Stack>
          <Space width={30} />
          <Stack animations={["fade-in-right"]}>
            <Header text={name} />
            <BodyText text={subTitle} />
          </Stack>
        </>
      </Row>
      <Skills />
    </Stack>
  );
};
