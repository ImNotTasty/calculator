import React from "react";
import styles from "./EquationHistory.module.css";

interface Props {
  history: string[];
}

const EquationHistory: React.FC<Props> = (props) => {
  const historyListItems = props.history.map((equation) => (
    <li key ={equation + Math.random()*100} className={styles.listItem}>{equation}</li>
  ));

  return (
    <div>
      <h1>History:</h1>
      <ul>{historyListItems}</ul>
    </div>
  );
};

export default EquationHistory;
