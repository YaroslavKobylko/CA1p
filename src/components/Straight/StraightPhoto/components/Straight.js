import React from 'react';
import styles from './Straight.module.scss';

const StraightText = () => {
  return (
    <div className={styles.StraightTextContainer}>
      <img className={styles.straightImage2} src='/pictures/StraightPhoto.png' alt="Straight to the point" />
      <div className={styles.straightPhotoContainer}>
        <div className={styles.straightBackground}></div>
        <div className={styles.IconsStraightContainer}>
          <div className={styles.IconsStraightBackground}></div>
          <img className={styles.straightImage4} src='/icons/Straight3.png' alt="24/7"  />
        </div>
        <div className={styles.straight74Container}>
          <div className={styles.straight74}>74%</div>
          <div className={styles.straightIncreased}>Increased in productivity</div>
        </div>
      </div>
    </div>
  );
}

export default StraightText;