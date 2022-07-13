import { NextPage } from "next";
import { HorizontalDivider } from "../../core-ui/building-blocks/dividers/horizontal-divider";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import {
  Bio,
  Profile,
  Skill,
  SocialLink,
} from "../../data-fetchers/profile/types";
import { About } from "../about/about";
import { BioText } from "../bio-text/bio-text";
import { HeaderCard } from "../header-card/header-card";
import { Resume } from "../resume/resume";
import { Skills } from "../skills/skills";

interface Props {
  profile: Profile;
  skills: Array<Skill>;
  socialLinks: Array<SocialLink>;
  bio: Bio;
}

export const Main: NextPage<Props> = ({
  skills,
  profile,
  socialLinks,
  bio,
}) => (
  <Stack gap={0} flex={1} height={"100%"} padding={"18px"}>
    <Space height={20} />
    <HeaderCard profile={profile} socialLinks={socialLinks} />
    <Space height={20} />
    <HorizontalDivider width={"70%"} />
    <Space height={10} />
    <BioText bio={bio} />
    <Skills skills={skills} />
    <Resume />
    <Space height={10} />
    <HorizontalDivider width={"70%"} />
    <Space height={10} />
    <About />
  </Stack>
);
