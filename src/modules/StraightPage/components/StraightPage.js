import React from 'react';
import styles from './StraightPage.module.scss';
import StraightText from '../../../components/Straight/StraightText';
import Straight from '../../../components/Straight/StraightPhoto';

const StraightPage = () => {
    return (
        <section className={styles.straightmain}>
            <div className={styles.straightContainer}>
                <StraightText />
                <Straight />
            </div>
        </section>
    );
}

export default StraightPage;