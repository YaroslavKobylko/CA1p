import React from 'react';
import styles from './PricingPage.module.scss';  // Використовуємо модульні стилі
import PricingText from '../../../components/Pricing/PricingText';
import PricingPhoto from '../../../components/Pricing/PricingPhoto';

const PricingPage = () => {
    return (
        <section className={styles.pricingPage}>
            <div className={styles.pricingContainer}>
                <PricingText />
                <PricingPhoto />
            </div>
        </section>
    );
}

export default PricingPage;