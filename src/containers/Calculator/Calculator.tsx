import React, { Component } from "react";
import CalculatorKey from "../../components/CalculatorKey/CalculatorKey";
import DisplayScreen from "../../components/DisplayScreen/DisplayScreen";
import Equation from "../../models/Equation";
import styles from "./Calculator.module.css";

const defaultUrl = "http://localhost:8080/equationHistory/";
const keySymbols = "0,1,2,3,4,5,6,7,8,9,+,-,/,*,(,)".split(",");

interface Props {
  getHistory: () => void;
}

interface State {
  currEquation: Equation;
}

class Calculator extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      currEquation: new Equation(),
    };
  }

  addToCurrEquation = (symbol: string) => {
    if (this.state.currEquation.isValidSymbolToAdd(symbol)) {
      const updatedEquation = new Equation([
        ...this.state.currEquation.symbols,
      ]);
      updatedEquation.addOperation(symbol);
      this.setState({ currEquation: updatedEquation });
    }
  };

  removeFromCurrEquation = () => {
    if (this.state.currEquation.symbols.length) {
      const updatedEquation = new Equation([
        ...this.state.currEquation.symbols,
      ]);
      updatedEquation.removeLastElement();
      this.setState({ currEquation: updatedEquation });
    }
  };

  clearEquation = () => {
    this.setState({ currEquation: new Equation() });
  };

  equalsHandler = () => {
    if (this.state.currEquation.isValidEquation()) {
      fetch(
        defaultUrl +
          encodeURIComponent(this.state.currEquation.symbols.join("")),
        {
          method: "POST",
        }
      );
      this.clearEquation();
      this.props.getHistory();
    }
  };

  render() {
    const mathKeys = keySymbols.map((symbol) => (
      <CalculatorKey
        key={symbol}
        click={() => this.addToCurrEquation(symbol)}
        symbol={symbol}
      />
    ));
    const operationalKeys = [
      <CalculatorKey
        key="DEL"
        click={this.removeFromCurrEquation}
        symbol="DEL"
      />,
      <CalculatorKey key="CLEAR" click={this.clearEquation} symbol="CLEAR" />,
      <CalculatorKey key="=" click={this.equalsHandler} symbol="=" />,
    ];

    return (
      <div className={styles.Calculator}>
        <DisplayScreen
          currentEquation={this.state.currEquation.symbols.join("")}
          result={this.state.currEquation.result}
        />
        <div className={styles.keyboard}>
          <div className={styles.mathKeys}>{mathKeys}</div>
          <div className={styles.operationalKeys}>{operationalKeys}</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
