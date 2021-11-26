export type Color = "main" | "secondary" | "white" | "gray1";

export const toCssVar = (color: Color): string => `var(--${color})`;
