import { FC } from "react";

import styles from "./WelcomMessage.module.css";

const WelcomeMessage: FC<{}> = () => (
  <div className={styles.WelcomeMessage}>
    <h1>Welcome to THE Calculator!</h1>
  </div>
);

export default WelcomeMessage;
