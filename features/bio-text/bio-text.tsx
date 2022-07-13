import * as React from "react";
import { Stack } from "../../core-ui/building-blocks/stack/stack";
import { BulletList } from "../../core-ui/lists/bullet-list/bullet-list";
import { BodyText } from "../../core-ui/text/body-text";
import { Bio } from "../../data-fetchers/profile/types";

interface Props {
  bio: Bio;
}

export const BioText: React.FC<Props> = ({ bio }) => (
  <Stack animations={["fade-in"]}>
    <BodyText text={bio.part_one} />
    <BulletList items={bio.principles.map((p) => p.text)} />
    <BodyText text={bio.part_two} />
  </Stack>
);
