import type { NextPage } from "next";
import { fetchProfile } from "../data-fetchers/profile/profile-fetcher";
import { Profile } from "../data-fetchers/profile/types";
import { Main } from "../features/main/main";
import Page from "./_page";

interface Props {
  profile: Profile;
}

const Home: NextPage<Props> = ({ profile }) => (
  <Page title={"Pontus | Full Stack Developer"}>
    <Main profile={profile} />
  </Page>
);

export async function getStaticProps() {
  return {
    props: {
      profile: await fetchProfile(),
    },
  };
}

export default Home;
