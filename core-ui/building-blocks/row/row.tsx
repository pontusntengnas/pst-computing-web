import * as React from "react";
import { PropsWithChildren } from "react";
import { buildStyleSheet } from "../common/build-style-sheet";
import { BuildingBlockProps } from "../common/shared-props";
import styles from "./row.module.css";

interface Props {
  centerContent?: boolean;
}

export const Row: React.FC<BuildingBlockProps & PropsWithChildren<Props>> = (
  props
) => {
  const { centerContent, ...otherProps } = props;
  const { classes, animations, children } = otherProps;

  const style = {
    ...buildStyleSheet(otherProps),
    ...(centerContent ? { justifyContent: "center" } : undefined),
  };

  return (
    <div
      className={[styles.row, ...(classes ?? []), ...(animations ?? [])].join(
        " "
      )}
      style={style}
    >
      {children}
    </div>
  );
};
