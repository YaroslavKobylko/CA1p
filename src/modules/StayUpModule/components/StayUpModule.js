import React from 'react';
import styles from './StayUpModule.module.scss';
import StayUp from '../../../components/StayUp';

const StayUpModule = () => {
    return (
        <section className={styles.stayupMain}>
            <div className={styles.blueBackgroundStayUp}></div>
            <StayUp />
        </section>
    );
}

export default StayUpModule;