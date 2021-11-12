import type { NextPage } from "next";
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
  const res = await fetch("http://localhost:8080/profile");
  const profile: Profile = await res.json();

  return {
    props: {
      profile,
    },
  };
}

export default Home;
