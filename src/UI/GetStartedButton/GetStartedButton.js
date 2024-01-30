import React from 'react';
import styles from "./GetStartedButton.module.scss";

const GetStartedButton = () => {
  return (
    <button className={styles.buttonGetStarted}>
      <div className={styles.speedGetStarted}>Get started</div>
    </button>
  );
};

export default GetStartedButton;