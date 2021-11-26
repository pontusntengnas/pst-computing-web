import type { NextPage } from "next";
import { fetchProfile } from "../data-fetchers/profile/profile-fetcher";
import { Profile } from "../data-fetchers/profile/types";
import { Main } from "../features/main/main";

interface Props {
  profile: Profile;
}

const Home: NextPage<Props> = ({ profile }) => <Main profile={profile} />;

export async function getStaticProps() {
  return {
    props: {
      profile: await fetchProfile(),
    },
  };
}

export default Home;
