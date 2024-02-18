import React from 'react';
import styles from './StartPhoto.module.scss';

const StartPhoto = () => {
  return (
    <div>
      <div className={styles.image1}>
        <img src="/icons/VstavkaMain/VstavkaMain1.svg" alt="MainSVG" />
      </div>
      <div className={styles.image2}>
        <img src="/icons/VstavkaMain/VstavkaMain2.svg" alt="MainSVG" />
      </div>
      <div className={styles.image3}>
        <img src="/icons/VstavkaMain/VstavkaMain3.svg" alt="MainSVG" />
      </div>
    </div>
  );
};

export default StartPhoto;