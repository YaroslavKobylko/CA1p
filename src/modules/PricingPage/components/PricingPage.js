import React from 'react';
import './PricingPage.scss';
import PricingText from '../../../components/PricingText';
import Pricing from '../../../components/Pricing';

const PricingPage = () => {
    return (
        <section className='pricing-page'>
            <div class="pricingframe">
            <PricingText/>
            <div className="svg-container-pricing">
            <img src="/icons/PricingSVG/PricingSVG.svg" alt="PricingSVG" />
            </div>
            <Pricing />
            </div>
        </section>
    );
}

export default PricingPage;