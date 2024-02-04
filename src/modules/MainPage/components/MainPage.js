import React from 'react';
import styles from './MainPage.module.scss';  // Використовуємо модульні стилі
import VstavkaMain from '../../../components/VstavkaMain/VstavkaMainPhoto';
import VstavkaMainText from '../../../components/VstavkaMain/VstavkaMainText';

const MainPage = () => {
    return (
        <section className={styles.mainPage}>
            <div className={styles.mainContainer}>
                <VstavkaMain />
                <VstavkaMainText />
            </div>
        </section>
    );
}

export default MainPage;