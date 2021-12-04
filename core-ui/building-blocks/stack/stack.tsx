import * as React from "react";
import { buildStyleSheet } from "../common/build-style-sheet";
import { BuildingBlockProps } from "../common/shared-props";
import styles from "./stack.module.css";

interface Props {
  centerContent?: boolean;
}

export const Stack: React.FC<BuildingBlockProps & Props> = (props) => {
  const { centerContent, ...otherProps } = props;
  const { classes, animations, children } = otherProps;

  const style = {
    ...buildStyleSheet(otherProps),
    ...(centerContent ? { alignItems: "center" } : undefined),
  };

  return (
    <div
      className={[styles.stack, ...(classes ?? []), ...(animations ?? [])].join(
        " "
      )}
      style={style}
    >
      {children}
    </div>
  );
};
