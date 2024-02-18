import React from 'react';
import styles from './SpeedModule.module.scss';
import SpeedIncrease from '../../../UI/SpeedIncrease';
import SpeedText from '../../../components/SpeedText';

const SpeedModule = () => {
    return (
        <section className={styles.SpeedModule}>
            <div className={styles.SpeedMainContainer}>
            <div className={styles.ContentContainer}>
                <div>
                <img className={styles.speedImage} src={process.env.PUBLIC_URL + '/pictures/Speed.png'} alt="SpeedPhoto" width={600} height={600}/>
                </div>
                <div className={styles.Rightpart}>
                        <SpeedText />
                </div>
            </div>
            <div className={styles.svgContainerSpeed}>
                    <img src="/icons/SpeedSVG3/SpeedSVG3.svg" alt="SpeedSVG" />
            </div>
            <div className={styles.speedIncreaseContainer}>
                <SpeedIncrease />
            </div>
            </div>
        </section>
    );
}

export default SpeedModule;