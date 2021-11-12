import * as React from "react";
import { buildStyleSheet } from "../common/build-style-sheet";
import { BuildingBlockProps } from "../common/shared-props";
import styles from "./stack.module.css";

export const Stack: React.FC<BuildingBlockProps> = (props) => (
  <div
    className={[
      styles.stack,
      ...(props.classes ?? []),
      ...(props.animations ?? []),
    ].join(" ")}
    style={buildStyleSheet(props)}
  >
    {props.children}
  </div>
);
