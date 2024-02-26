import React from 'react';
import styles from './StartText.module.scss';

const StartText = () => {
  return (
    <div className={styles.MainContainer}>
    <div className={styles.ContentContainer}>
      <div className={styles.TextContainer}>
      <h1 className={styles.TitleText}>Head start your business today!</h1>
      <h3 className={styles.SubtitleText}>Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.</h3>
      </div>
      <div className={styles.GetStartedContainer}>
          <div className={styles.getStarted}>Get started</div>
        <div className={styles.TryForfreeText}>
          <p>Try for free</p>
          <div className={styles.SVGContainer}><img src="\icons\VstavkaMainText\StartTry.svg" alt="Try" width={16} height={16}/></div>
          </div>
      </div>
      <div className={styles.Partners}>
        <img src="/icons/VstavkaMainText/StartText4.svg" alt="VstavkaMain" width={132} height={35}/>
        <img src="/icons/VstavkaMainText/StartText1.svg" alt="VstavkaMain" width={132} height={35}/>
        <img src="/icons/VstavkaMainText/StartText3.svg" alt="VstavkaMain" width={132} height={35}/>
        <img src="/icons/VstavkaMainText/StartText2.svg" alt="VstavkaMain" width={132} height={35}/>
      </div>
      </div>
      </div>
  );
};

export default StartText;