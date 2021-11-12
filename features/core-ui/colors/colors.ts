export type Color = "main" | "secondary" | "white";

export const toCssVar = (color: Color): string => `var(--${color})`;
