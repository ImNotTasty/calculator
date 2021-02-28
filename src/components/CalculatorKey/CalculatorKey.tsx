import React from "react";
import styles from "./CalculatorKey.module.css";

interface Props {
  symbol: string;
  click: () => void;
}

const CalculatorKey: React.FC<Props> = (props) => {
  return (
    <button className={styles.CalculatorKey} onClick={props.click}>
      {props.symbol}
    </button>
  );
};

export default CalculatorKey;
