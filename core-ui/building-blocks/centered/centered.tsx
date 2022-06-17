import * as React from "react";
import { PropsWithChildren } from "react";
import styles from "./centered.module.css";

interface Props {}

export const Centered: React.FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.centered}>{children}</div>
);
