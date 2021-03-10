import { FC, useState } from "react";

import CalculatorKey from "../CalculatorKey/CalculatorKey";
import DisplayScreen from "../DisplayScreen/DisplayScreen";
import Equation from "../../models/Equation";
import styles from "./Calculator.module.css";

const keySymbols = "0,1,2,3,4,5,6,7,8,9,+,-,/,*,(,)".split(",");

interface Props {
  addToHistoryHandler: (equation: Equation) => void;
}

const Calculator: FC<Props> = ({ addToHistoryHandler }) => {
  const [currEquation, setCurrEquation] = useState<Equation>(new Equation());

  const addSymbolToCurrEquation = (symbol: string) => {
    if (currEquation.isValidSymbolToAdd(symbol)) {
      const updatedEquation = new Equation([...currEquation.symbols]);
      updatedEquation.addOperation(symbol);
      setCurrEquation(updatedEquation);
    }
  };

  const removeFromCurrEquation = () => {
    if (currEquation.symbols.length) {
      const updatedEquation = new Equation([...currEquation.symbols]);
      updatedEquation.removeLastElement();
      setCurrEquation(updatedEquation);
    }
  };

  const clearEquation = () => setCurrEquation(new Equation());

  const equalsHandler = () => {
    addToHistoryHandler(currEquation);
    if (currEquation.isValidEquation()) {
      clearEquation();
    }
  };

  const mathKeys = keySymbols.map((symbol) => (
    <CalculatorKey
      key={symbol}
      click={() => addSymbolToCurrEquation(symbol)}
      symbol={symbol}
    />
  ));

  const operationalKeys = [
    <CalculatorKey key="DEL" click={removeFromCurrEquation} symbol="DEL" />,
    <CalculatorKey key="CLEAR" click={clearEquation} symbol="CLEAR" />,
    <CalculatorKey key="=" click={equalsHandler} symbol="=" />,
  ];

  return (
    <div className={styles.Calculator}>
      <DisplayScreen
        currentEquation={currEquation.symbols.join("")}
        result={currEquation.result}
      />
      <div className={styles.keyboard}>
        <div className={styles.mathKeys}>{mathKeys}</div>
        <div className={styles.operationalKeys}>{operationalKeys}</div>
      </div>
    </div>
  );
};

export default Calculator;
