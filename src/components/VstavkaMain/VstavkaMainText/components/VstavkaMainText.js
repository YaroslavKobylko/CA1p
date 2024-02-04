import React from 'react';
import styles from './VstavkaMainText.module.scss';

const VstavkaMainText = () => {
  return (
    <div className={styles.vstavkaMainTextContainer}>
      <div className={styles.vstavkaMainBot}>
        <div className={styles.GetStartedContainer}>
          <div className={styles.GetStartedBackground}></div>
          <div className={styles.getStarted}>Get started</div>
        </div>
        <div className={styles.vstavkaMainTextTry}>
        <img src="\icons\VstavkaMainText\VstavkaMainTrySVG.svg" alt="Try" />
          <div className={styles.vstavkaMainTexttryForFree}>Try for free</div>
        </div>
      </div>
      <div className={styles.Partners}>
        <img src="/icons/VstavkaMainText/VstavkaMainTextSVG4.svg" alt="VstavkaMain" />
        <img src="/icons/VstavkaMainText/VstavkaMainTextSVG1.svg" alt="VstavkaMain" />
        <img src="/icons/VstavkaMainText/VstavkaMainTextSVG3.svg" alt="VstavkaMain" />
        <img src="/icons/VstavkaMainText/VstavkaMainTextSVG2.svg" alt="VstavkaMain" />
      </div>
      <div className={styles.vstavkaMainTop}>
        <div className={styles.consecteturAdipiscing}>
          Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.
        </div>
        <div className={styles.headStartYourBusiness}>Head start your business today!</div>
      </div>
    </div>
  );
};

export default VstavkaMainText;