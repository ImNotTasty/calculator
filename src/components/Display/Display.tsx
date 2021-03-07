import React from "react";
import styles from "./Display.module.css";

interface Props {
  currentEquation: string;
  result: string;
}
const Display: React.FC<Props> = (props) => {
  return (
    <div className={styles.displayScreen}>
      <h1 className={styles.currentEquation}>{props.currentEquation}</h1>
      <h1 className={styles.currentResult}>{props.result}</h1>
    </div>
  );
};

export default Display;
