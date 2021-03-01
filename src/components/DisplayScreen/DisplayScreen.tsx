import { FC } from "react";

import styles from "./DisplayScreen.module.css";

interface Props {
  currentEquation: string;
  result: string;
}

const DisplayScreen: FC<Props> = ({ currentEquation, result }) => (
  <div className={styles.DisplayScreen}>
    <h1 className={styles.currentEquation}>{currentEquation}</h1>
    <h1 className={styles.currentResult}>{result}</h1>
  </div>
);

export default DisplayScreen;
