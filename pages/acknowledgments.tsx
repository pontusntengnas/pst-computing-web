import { NextPage } from "next";
import { getProfile } from "../data-fetchers/profile/profile-client";
import { Profile } from "../data-fetchers/profile/types";
import { AcknowledgmentsPage } from "../features/acknowledgments/acknowledgments";
import Page from "./_page";

interface Props {
  profile: Profile;
}

const Acknowledgments: NextPage<Props> = ({ profile: { name, role } }) => (
  <Page title={`${name} | ${role} [Acknowledgments]`}>
    <AcknowledgmentsPage />
  </Page>
);

export async function getStaticProps() {
  return {
    props: {
      profile: await getProfile(),
    },
  };
}

export default Acknowledgments;
