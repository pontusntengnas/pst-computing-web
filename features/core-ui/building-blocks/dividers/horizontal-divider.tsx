import * as React from "react";
import styles from "./horizontal-divider.module.css";

interface Props {
  width?: string | number;
}

export const HorizontalDivider: React.VFC<Props> = ({ width }) => (
  <hr style={{ width }} className={styles.rounded}></hr>
);
