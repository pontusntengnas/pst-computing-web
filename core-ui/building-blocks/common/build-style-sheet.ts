import { CSSProperties } from "react";
import { BuildingBlockProps } from "./shared-props";

export const buildStyleSheet = (
  props: BuildingBlockProps
): CSSProperties | undefined => {
  let style = undefined;

  for (const [key, value] of Object.entries(props)) {
    if (key === "children" || Array.isArray(value)) {
      continue;
    }

    if (style === undefined) {
      style = {};
    }

    style = { ...style, [key]: value };
  }

  return style;
};
