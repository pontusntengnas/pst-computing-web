import * as React from "react";
import { buildStyleSheet } from "../common/build-style-sheet";
import { BuildingBlockProps } from "../common/shared-props";
import styles from "./row.module.css";

export const Row: React.FC<BuildingBlockProps> = (props) => (
  <div
    className={[
      styles.row,
      ...(props.classes ?? []),
      ...(props.animations ?? []),
    ].join(" ")}
    style={buildStyleSheet(props)}
  >
    {props.children}
  </div>
);
