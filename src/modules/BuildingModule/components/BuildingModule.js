import React from 'react';
import styles from './BuildingModule.module.scss';
import Building from '../../../components/Building';

const BuildingPage = () => {
    return (
        <section className={styles.buildingMain}>
            <div className={styles.building}>
                <Building />
            </div>
        </section>
    );
}

export default BuildingPage;