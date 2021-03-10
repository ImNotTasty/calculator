import { FC, useEffect, useState } from "react";

import Equation from "../../models/Equation";
import Calculator from "../Calculator/Calculator";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import EquationHistory from "../EquationHistory/EquationHistory";
import styles from "./App.module.css";

const timeForWelcome = 5000;

const App: FC<{}> = (props) => {
  const [history, setHistory] = useState<Equation[]>([]);
  const [isWelcomeOver, setIsWelcomeOver] = useState<boolean>();

  const addToHistory = (equtionToAdd: Equation) => {
    if (equtionToAdd.isValidEquation()) {
      const updatedHistory = [...history, equtionToAdd];
      setHistory(updatedHistory);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsWelcomeOver(true);
    }, timeForWelcome);
  });

  let app: JSX.Element;
  if (isWelcomeOver) {
    app = (
      <div>
        <Calculator addToHistoryHandler={addToHistory} />{" "}
        <EquationHistory
          history={history.map((equation) => equation.symbols.join(" "))}
        />
      </div>
    );
  } else {
    app = <WelcomeMessage />;
  }

  return <div className={styles.App}>{app}</div>;
};

export default App;
