import React from 'react';
import GetStartedButton from '../../../UI/GetStartedButton';
import styles from './SpeedText.module.scss';

const SpeedText = () => {
  return (
      <div className={styles.SpeedTextContainer}>
        <div className={styles.speedSpeed}>Speed</div>
        <div className={styles.SpeedTitle}><p>Faster than ever before</p></div>
        <div className={styles.SpeedSubtitle}>
        <p>
        Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis
        velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius.
        Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justo,
        tempus sed odio.
        </p>
      </div>
      <div className={styles.GetStartedContainer}>
        <GetStartedButton />
        <div className={styles.TryForContainer}>
          <img src="/icons/SpeedSVG3/SpeedtextSVG.svg" alt="SpeedtextSVG" width={16} height={16}/>
          <div className={styles.TryForText}><p>Try for free</p></div>
        </div>
      </div>
      </div>
  );
}

export default SpeedText;