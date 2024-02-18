import React from 'react';
import styles from './PricingModule.module.scss';
import PricingText from '../../../components/Pricing/PricingText';
import PricingPhoto from '../../../components/Pricing/PricingPhoto';

const PricingModule = () => {
    return (
        <section className={styles.pricingPage}>
            <div className={styles.pricingContainer}>
                <PricingText />
                <PricingPhoto />
            </div>
        </section>
    );
}

export default PricingModule;