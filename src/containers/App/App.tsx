import React, { Component } from "react";
import Calculator from "../Calculator/Calculator";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import EquationHistory from "../../components/EquationHistory/EquationHistory";
import styles from "./App.module.css";

const defaultUrl = "http://localhost:8080/equationHistory";
const timeForWelcome = 5000;

interface State {
  history: string[];
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

  getHistory = () => {
    fetch(defaultUrl)
      .then((res) => res.json())
      .then((history) => {
        const updatedHistory = [...history];
        this.setState({ ...this.state, history: updatedHistory });
      });
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ ...this.state, isWelcomeOver: true });
    }, timeForWelcome);
    this.getHistory();
  }

  render() {
    let app: JSX.Element;
    if (this.state.isWelcomeOver) {
      app = (
        <div>
          <Calculator getHistory={this.getHistory} />
          <EquationHistory history={this.state.history} />
        </div>
      );
    } else {
      app = <WelcomeMessage />;
    }

    return <div className={styles.App}>{app}</div>;
  }
}

export default App;
