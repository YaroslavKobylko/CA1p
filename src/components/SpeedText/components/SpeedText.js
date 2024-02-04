import React from 'react';
import GetStartedButton from '../../../UI/GetStartedButton';
import styles from './SpeedText.module.scss';

const SpeedText = () => {
  return (
    <div className={styles.SpeedTextContainer}>
      <div className={styles.SpeedButtonContainer}>
        <div className={styles.SpeedBackgroundContainer}></div>
        <div className={styles.speedSpeed}>Speed</div>
      </div>
      <div className={styles.speedGetStartedContainer}>
        <GetStartedButton />
        <div className={styles.SpeedTrycontainer}>
          <div className={styles.SpeedTryBackground}></div>
          <img src="/icons/SpeedSVG3/SpeedtextSVG.svg" alt="SpeedtextSVG" />
          <div className={styles.speedTryForFree}>Try for free</div>
        </div>
      </div>
      <div className={styles.speedFasterThanEver}>Faster than ever before</div>
      <div className={styles.speedMorbi}>
        Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis
        velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius.
        Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justo,
        tempus sed odio.
      </div>
    </div>
  );
}

export default SpeedText;