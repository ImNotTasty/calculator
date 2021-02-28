import { Component } from "react";

import Equation from "../../models/Equation";
import Calculator from "../Calculator/Calculator";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import EquationHistory from "../../components/EquationHistory/EquationHistory";
import styles from "./App.module.css";

const timeForWelcome = 5000;

interface State {
  history: Equation[];
  isWelcomeOver: boolean;
}

class App extends Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      history: [],
      isWelcomeOver: false,
    };
  }

  addToHistory = (equtionToAdd: Equation) => {
    if (equtionToAdd.isValidEquation()) {
      const updatedHistory = [...this.state.history, equtionToAdd];
      this.setState({ ...this.state, history: updatedHistory });
    }
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ ...this.state, isWelcomeOver: true });
    }, timeForWelcome);
  }

  render() {
    let app: JSX.Element;
    if (this.state.isWelcomeOver) {
      app = (
        <div>
          <Calculator addToHistoryHandler={this.addToHistory} />{" "}
          <EquationHistory
            history={this.state.history.map((equation) =>
              equation.symbols.join(" ")
            )}
          />
        </div>
      );
    } else {
      app = <WelcomeMessage />;
    }

    return <div className={styles.App}>{app}</div>;
  }
}

export default App;
