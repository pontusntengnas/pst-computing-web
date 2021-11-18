import * as React from "react";
import { Skill } from "../../types/types";
import { Row } from "../core-ui/building-blocks/row/row";
import { BodyText } from "../core-ui/text/body-text";
import styles from "./skill-box.module.css";

interface Props {
  skill: Skill;
}

export const SkillBox: React.VFC<Props> = ({ skill: { name } }) => {
  return (
    <Row classes={[styles.skillBox]} centerContent>
      <BodyText text={name} />
    </Row>
  );
};
