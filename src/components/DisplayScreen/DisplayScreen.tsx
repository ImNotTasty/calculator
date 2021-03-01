import React from "react";
import styles from "./DisplayScreen.module.css";

interface Props {
  currentEquation: string;
  result: string;
}
const DisplayScreen: React.FC<Props> = (props) => {
  return (
    <div className={styles.DisplayScreen}>
      <h1 className={styles.currentEquation}>{props.currentEquation}</h1>
      <h1 className={styles.currentResult}>{props.result}</h1>
    </div>
  );
};

export default DisplayScreen;
