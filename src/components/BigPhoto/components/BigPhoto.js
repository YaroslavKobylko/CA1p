import React from 'react';
import styles from './BigPhoto.module.scss';

const BigPhoto = () => {
  return (
    <div className={styles.BigPhotoframe}>
      <div className={styles.BigPhotobluepart}></div>
      <div className={styles.BigPhotoPhotoContainer}>
        <img className={styles.BigPhotoImage} src='/pictures/BigPhoto.png' alt="BigPhoto" />
        <div className={styles.BigPhotoTextContainer}>
          <div className={styles.BigPhotoButtonBackground}></div>
          <div className={styles.BigPhotoWatchIntroduction}>Watch Introduction</div>
        </div>
      </div>
    </div>
  );
}

export default BigPhoto;