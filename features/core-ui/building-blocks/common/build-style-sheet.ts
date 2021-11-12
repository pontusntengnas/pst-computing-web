import { CSSProperties } from "react";
import { BuildingBlockProps } from "./shared-props";

export const buildStyleSheet = (
  props: BuildingBlockProps
): CSSProperties | undefined => {
  let style = {};

  for (const [key, value] of Object.entries(props)) {
    if (key === "children") {
      continue;
    }

    style = { ...style, [key]: value };
  }

  return style === {} ? undefined : style;
};
