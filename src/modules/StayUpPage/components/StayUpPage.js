import React from 'react';
import styles from './StayUpPage.module.scss';
import StayUp from '../../../components/StayUp';

const StayUpPage = () => {
    return (
        <section className={styles.stayupMain}>
            <div className={styles.blueBackgroundStayUp}></div>
            <StayUp />
        </section>
    );
}

export default StayUpPage;