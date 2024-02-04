import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarContainer}>
        <p>Explore all our services.</p>
        <div className={styles.customButton}>
          <img src="/icons/TopBarSVG/TopBar.svg" alt="X" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;