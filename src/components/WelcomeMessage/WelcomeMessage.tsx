import React from "react";
import styles from "./WelcomMessage.module.css";

const WelcomeMessage: React.FC<{}> = () => {
  return (
    <div className={styles.WelcomeMessage}>
      <h1>
        Welcome to THE Calculator!
      </h1>
    </div>
  );
};

export default WelcomeMessage;
