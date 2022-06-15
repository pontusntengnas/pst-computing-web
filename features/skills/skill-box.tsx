import * as React from "react";
import { Row } from "../../core-ui/building-blocks/row/row";
import { BodyText } from "../../core-ui/text/body-text";
import { Skill } from "../../data-fetchers/profile/types";
import styles from "./skill-box.module.css";

interface Props {
  skill: Skill;
}

export const SkillBox: React.FC<Props> = ({ skill: { name } }) => (
  <Row classes={[styles.skillBox]}>
    <BodyText text={`+ ${name}`} />
  </Row>
);
