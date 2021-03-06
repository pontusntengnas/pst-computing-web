import * as React from "react";
import { SortResult } from "../../common/types/types";
import { Row } from "../../core-ui/building-blocks/row/row";
import { Space } from "../../core-ui/building-blocks/space/space";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { Header } from "../../core-ui/text/header";
import { Skill } from "../../data-fetchers/profile/types";
import { SkillBox } from "./skill-box";

interface Props {
  skills: Array<Skill>;
}

export const Skills: React.FC<Props> = ({ skills }) => (
  <Stack animations={["fade-in"]} flex={1}>
    <Row centerContent>
      <Header text={"What I enjoy working with"} size={2} />
    </Row>
    <Row flexWrap={"wrap"} margin={"0px 6%"} centerContent>
      {skills.sort(byOrderOfPreference).map((skill) => (
        <Stack key={skill.name}>
          <SkillBox skill={skill} />
          <Space width={160} />
        </Stack>
      ))}
    </Row>
  </Stack>
);

const byOrderOfPreference = (a: Skill, b: Skill): SortResult => {
  if (a.orderOfPreference === b.orderOfPreference) {
    return 0;
  }

  return a.orderOfPreference > b.orderOfPreference ? 1 : -1;
};
