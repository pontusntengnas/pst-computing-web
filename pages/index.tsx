import type { NextPage } from "next";
import { fetchProfile } from "../data-fetchers/profile/profile-fetcher";
import { Main } from "../features/main/main";
import { Profile } from "../types/types";

interface Props {
  profile: Profile;
}

const Home: NextPage<Props> = (props) => {
  const {
    profile: { details, skills, socialLinks },
  } = props;

  return (
    <Main
      name={`${details.name} ${details.lastName}`}
      subTitle={`${details.description} Based in ${details.location}.`}
      skills={skills}
      socialLinks={socialLinks}
    />
  );
};

export async function getStaticProps() {
  return {
    props: {
      profile: await fetchProfile(),
    },
  };
}

export default Home;
