import type { NextPage } from "next";
import Head from "next/head";
import { fetchProfile } from "../data-fetchers/profile/profile-fetcher";
import { Profile } from "../data-fetchers/profile/types";
import { Main } from "../features/main/main";
interface Props {
  profile: Profile;
}

const Home: NextPage<Props> = ({ profile }) => (
  <>
    <Head>
      <title>Pontus | Full Stack Developer</title>
    </Head>
    <Main profile={profile} />
  </>
);

export async function getStaticProps() {
  return {
    props: {
      profile: await fetchProfile(),
    },
  };
}

export default Home;
