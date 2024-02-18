import React from 'react';
import styles from './StraightModule.module.scss';
import StraightText from '../../../components/Straight/StraightText';
import Straight from '../../../components/Straight/StraightPhoto';

const StraightModule = () => {
    return (
        <section className={styles.straightmain}>
            <div className={styles.straightContainer}>
                <StraightText />
                <Straight />
            </div>
        </section>
    );
}

export default StraightModule;