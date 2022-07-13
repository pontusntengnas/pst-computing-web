import type { NextPage } from "next";
import {
  getBio,
  getProfile,
  getSkills,
  getSocialLinks,
} from "../data-fetchers/profile/profile-client";
import {
  Bio,
  Profile,
  Skill,
  SocialLink,
} from "../data-fetchers/profile/types";
import { Main } from "../features/main/main";
import Page from "./_page";

interface Props {
  profile: Profile;
  skills: Array<Skill>;
  socialLinks: Array<SocialLink>;
  bio: Bio;
}

const Home: NextPage<Props> = ({ profile, skills, socialLinks, bio }) => (
  <Page title={`${profile.name} | ${profile.role}`}>
    <Main
      profile={profile}
      skills={skills}
      socialLinks={socialLinks}
      bio={bio}
    />
  </Page>
);

export async function getStaticProps() {
  return {
    props: {
      profile: await getProfile(),
      skills: await getSkills(),
      socialLinks: await getSocialLinks(),
      bio: await getBio(),
    },
  };
}

export default Home;
