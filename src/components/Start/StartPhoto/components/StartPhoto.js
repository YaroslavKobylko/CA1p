import React from 'react';
import styles from './StartPhoto.module.scss';

const StartPhoto = () => {
  return (
    <div>
      <div className={styles.image1}>
        <img src="/icons/Start/Start1.svg" alt="MainSVG" width={270} height={250}/>
      </div>
      <div className={styles.image2}>
        <img src="/icons/Start/Start2.svg" alt="MainSVG" width={240} height={260}/>
      </div>
      <div className={styles.image3}>
        <img src="/icons/Start/Start3.svg" alt="MainSVG" width={320} height={275}/>
      </div>
    </div>
  );
};

export default StartPhoto;