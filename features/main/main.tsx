import { NextPage } from "next";
import * as React from "react";
import { HorizontalDivider } from "../../core-ui/building-blocks/dividers/horizontal-divider";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { Profile } from "../../data-fetchers/profile/types";
import { About } from "../about/about";
import { Bio } from "../bio/bio";
import { HeaderCard } from "../header-card/header-card";
import { Resume } from "../resume/resume";
import { Skills } from "../skills/skills";

interface Props {
  profile: Profile;
}

export const Main: NextPage<Props> = ({
  profile: { details, socialLinks, skills },
}) => (
  <Stack
    gap={0}
    flex={1}
    height={"100%"}
    paddingLeft={"10px"}
    paddingRight={"10px"}
  >
    <Space height={20} />
    <HeaderCard details={details} socialLinks={socialLinks} />
    <Space height={20} />
    <HorizontalDivider width={"70%"} />
    <Space height={10} />
    <Bio />
    <Resume />
    <Skills skills={skills} />
    <Space height={10} />
    <HorizontalDivider width={"70%"} />
    <Space height={10} />
    <About />
  </Stack>
);
