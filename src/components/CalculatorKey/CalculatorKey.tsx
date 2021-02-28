import { FC } from "react";

import styles from "./CalculatorKey.module.css";

interface Props {
  symbol: string;
  click: () => void;
}

const CalculatorKey: FC<Props> = ({ symbol, click }) => (
  <button className={styles.CalculatorKey} onClick={click}>
    {symbol}
  </button>
);

export default CalculatorKey;
