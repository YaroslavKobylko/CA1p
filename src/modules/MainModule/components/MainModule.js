import React from 'react';
import styles from './MainModule.module.scss';
import StartPhoto from '../../../components/Start/StartPhoto';
import StartText from '../../../components/Start/StartText';

const MainModule = () => {
    return (
        <section className={styles.mainPage}>
            <div className={styles.mainContainer}>
                <StartPhoto />
                <StartText />
            </div>
        </section>
    );
}

export default MainModule;