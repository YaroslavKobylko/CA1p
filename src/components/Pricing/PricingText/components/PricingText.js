import React from 'react';
import styles from './PricingText.module.scss';

const PricingText = () => {
  return (
    <div className={styles.TextContainer}>
      <div className={styles.Pricing}>
        <p>Pricing</p>
      </div>
      <div className={styles.PricingPlan}>
        <p>Pricing plans</p>
      </div>
      <div className={styles.PricingSubtitle}>
        <p>Suspendisse mattis porttitor gravida et malesuada fames.</p>
      </div>
      <div className={styles.PricingSVGContainer}>
        <img src="/icons/PricingSVG/PricingSVG.svg" alt="PricingSVG" width={170} height={92}/>
      </div>
    </div>
  );
}

export default PricingText;