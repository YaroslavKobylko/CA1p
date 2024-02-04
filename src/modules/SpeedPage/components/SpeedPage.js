import React from 'react';
import styles from './SpeedPage.module.scss';
import SpeedIncrease from '../../../UI/SpeedIncrease';
import SpeedText from '../../../components/SpeedText';

const SpeedPage = () => {
    return (
        <section className={styles.speedMainContainer}>
            <div className={styles.speedMain}>
                <div className={styles.SpeedLeftpart}>
                    <div className={styles.speedPhotoContainer}>
                        <img className={styles.speedImage} src={process.env.PUBLIC_URL + '/pictures/Speed.png'} alt="SpeedPhoto" />
                        <div className={styles.speedIncreaseContainer}>
                            <SpeedIncrease />
                        </div>
                    </div>
                    <SpeedText />
                </div>
                <div className={styles.svgContainerSpeed}>
                    <img src="/icons/SpeedSVG3/SpeedSVG3.svg" alt="SpeedSVG" />
                </div>
            </div>
        </section>
    );
}

export default SpeedPage;