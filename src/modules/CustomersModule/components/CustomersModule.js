import React from 'react';
import styles from './CustomersModule.module.scss';
import Customers from '../../../components/Customers';

const CustomersModule = () => {
    return (
        <section className={styles.customerMain}>
            <div className={styles.customerMainContainer}>
                    <div className={styles.customerSvg1Container}>
                        <img src="/icons/CustomersSVG/CustomersSVG1.svg" alt="CustomersSVG1" />
                    </div>
                    <div className={styles.customerSvg2Container}>
                        <img src="/icons/CustomersSVG/CustomersSVG2.svg" alt="CustomersSVG2" />
                    </div>
                    <Customers />
            </div>
        </section>
    );
}

export default CustomersModule;