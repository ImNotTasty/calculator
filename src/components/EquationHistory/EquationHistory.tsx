import { FC } from "react";

import styles from "./EquationHistory.module.css";

interface Props {
  history: string[];
}

const EquationHistory: FC<Props> = ({history}) => {
  const historyListItems = history.map((equation) => (
    <li key={equation + Math.random() * 100} className={styles.listItem}>
      {equation}
    </li>
  ));

  return (
    <div>
      <h1>History:</h1>
      <ul>{historyListItems}</ul>
    </div>
  );
};

export default EquationHistory;
