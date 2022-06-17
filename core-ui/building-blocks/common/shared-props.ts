import { Animation } from "../../animations/animations";

export interface BuildingBlockProps {
  margin?: string | number;
  marginTop?: string | number;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  padding?: string;
  backgroundColor?: string;
  flexWrap?: string;
  opacity?: number;
  gap?: number;
  flex?: number;
  height?: string;
  width?: string;
  justifyContent?: string;
  classes?: Array<string>;
  animations?: Array<Animation>;
}
