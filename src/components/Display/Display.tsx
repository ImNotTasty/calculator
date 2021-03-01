import { FC } from "react";

import styles from "./Display.module.css";

interface Props {
  currentEquation: string;
  result: string;
}

const Display: FC<Props> = ({ currentEquation, result }) => (
  <div className={styles.displayScreen}>
    <h1 className={styles.currentEquation}>{currentEquation}</h1>
    <h1 className={styles.currentResult}>{result}</h1>
  </div>
);

export default Display;
