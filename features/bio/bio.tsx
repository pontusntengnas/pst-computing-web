import * as React from "react";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { BulletList } from "../../core-ui/lists/bullet-list/bullet-list";
import { BodyText } from "../../core-ui/text/body-text";

export const Bio: React.VFC = () => (
  <Stack animations={["fade-in"]}>
    <BodyText
      text={`I am a curios person who loves to learn new things which is why I like
        my job as a software developer so much, there is always something new to
        learn and that motivates me every day. Working full stack and agile is
        my preferred way of working. Building a new feature across the stack and
        seeing it go to production is just a great feeling. My principles when
        it comes to coding that I do my best to follow every day is:`}
    />
    <BulletList
      items={[
        "Simplicity.",
        "Add new dependencies with care.",
        "Write clear and clean.",
        "Write tests.",
      ]}
    />
    <BodyText
      text={`I prefer to work in self-moderated teams with people from different
        disciplines. My ambition is to contribute with good code and good spirit
        to my team.`}
    />
  </Stack>
);
