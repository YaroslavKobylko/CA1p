import React from 'react';
import './PricingPage.scss';
import PricingText from '../../../components/PricingText';
import Pricing from '../../../components/Pricing';
import PricingSVG from '../../../UI/PricingSVG/PricingSVG';

const PricingPage = () => {
    return (
        <main className='pricing-page'>
            <div class="pricingframe">
            <PricingText/>
            <PricingSVG />
            <Pricing />
            </div>
        </main>
    );
}

export default PricingPage;