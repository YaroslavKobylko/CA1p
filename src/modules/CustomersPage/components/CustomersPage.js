import React from 'react';
import './CustomersPage.scss';
import Customers from '../../../components/Customers';

const CustomersPage = () => {
    return (
        <section className='customer-main'>
            <div className='customer-main-container'>
                <div class="customerframe">
                    <div className="customersvg1-container">
                        <img src="/icons/CustomersSVG/CustomersSVG1.svg" alt="CustomersSVG1" />
                    </div>
                    <div className="customersvg2-container">
                        <img src="/icons/CustomersSVG/CustomersSVG2.svg" alt="CustomersSVG2" />
                    </div>
                    <Customers/>
</div>
</div>
        </section>
    );
}

export default CustomersPage;