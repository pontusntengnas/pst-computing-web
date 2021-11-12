import { Animation } from "../../animations/animations";

export interface BuildingBlockProps {
  margin?: number;
  padding?: number;
  backgroundColor?: string;
  classes?: Array<string>;
  animations?: Array<Animation>;
}
