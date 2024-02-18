import React from 'react';
import styles from './SpeedIncrease.module.scss';

const SpeedIncrease = () => {
  return (
    <div className={styles.IncreaseContainer}>
      <div className={styles.SpeedSVGContainer}>
        <img className={styles.SpeedSvg} src={process.env.PUBLIC_URL + '/icons/SpeedIncreased.png'} alt="SpeedIncreasedPhoto" width={48} height={48}/>
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.IncreasedTextContainer}>
          <p >Increased in sales</p>
        </div>
        <div>
          <p className={styles.interest}>86%</p>
        </div>
      </div>
    </div>
  );
}

export default SpeedIncrease;