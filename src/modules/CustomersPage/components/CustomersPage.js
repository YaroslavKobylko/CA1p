import React from 'react';
import './CustomersPage.scss';
import CustomersSVG1 from '../../../UI/CustomersSVG/CustomersSVG1';
import CustomersSVG2 from '../../../UI/CustomersSVG/CustomersSVG2';
import Customers from '../../../components/Customers';

const CustomersPage = () => {
    return (
        <main className='customer-main'>
            <div className='customer-main-container'>
<div class="customerframe">
    <CustomersSVG1/>
    <CustomersSVG2/>
    <Customers/>
</div>
</div>
        </main>
    );
}

export default CustomersPage;