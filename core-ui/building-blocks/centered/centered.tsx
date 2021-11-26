import * as React from "react";
import styles from "./centered.module.css";

interface Props {}

export const Centered: React.FC<Props> = ({ children }) => (
  <div className={styles.centered}>{children}</div>
);
