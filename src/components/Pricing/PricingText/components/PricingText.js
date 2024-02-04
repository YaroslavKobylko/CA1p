import React from 'react';
import styles from './PricingText.module.scss';

const PricingText = () => {
  return (
    <div className={styles.pricingTextContainer}>
      <div className={styles.PriceButtonContainer}>
        <div className={styles.PricingButtonContainer}></div>
        <div className={styles.PricingButtonText}>Pricing</div>
      </div>
      <div className={styles.PricingPlan}>Pricing plans</div>
      <div className={styles.PricingSuspendisse}>
        Suspendisse mattis porttitor gravida et malesuada fames.
      </div>
      <div className={styles.PricingSVGContainer}>
            <img src="/icons/PricingSVG/PricingSVG.svg" alt="PricingSVG" />
            </div>
    </div>
  );
}

export default PricingText;