import React from 'react';
import styles from './BuildingPage.module.scss';  // Використовуємо модульні стилі
import Building from '../../../components/Building';

const BuildingPage = () => {
    return (
        <section className={styles.buildingMain}>
            <div className={styles.building}>
                <div className={styles.BuildingMainContainer}>
                    <div className={styles.buildingSvg1Container}>
                        <div className={styles.svgContainerBuilding1}>
                            <img src="/icons/BuildingSVG/BuildingSVG4.svg" alt="BuildingSVG4" />
                        </div>
                    </div>
                    <div className={styles.buildingText1}>
                        <div className={styles.BuildingTextMain1}>
                            <div className={styles.BuildingTextBackground1}></div>
                            <div className={styles.SVGContainer1}>
                                <div className={styles.buildingBetterResults}>Better results</div>
                                <div className={styles.svgContainerBuilding}>
                                    <img src="/icons/BuildingSVG/BuildingSVG1.svg" alt="BuildingSVG1" />
                                </div>
                                <div className={styles.Vestibulum}>
                                    Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.
                                </div>
                            </div>
                        </div>
                        <div className={styles.BuildingTextMain2}>
                            <div className={styles.BuildingTextBackground1}></div>
                            <div className={styles.SVGContainer2}>
                                <div className={styles.buildingLessPaperWork}>Less paper work</div>
                                <div className={styles.svgContainerBuilding}>
                                    <img src="/icons/BuildingSVG/BuildingSVG2.svg" alt="BuildingSVG2" />
                                </div>
                                <div className={styles.duisConvallis}>
                                    Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.
                                </div>
                            </div>
                        </div>
                        <div className={styles.BuildingTextMain3}>
                            <div className={styles.BuildingTextBackground1}></div>
                            <div className={styles.SVGContainer3}>
                                <div className={styles.buildingMoreProfit}>More profit</div>
                                <div className={styles.svgContainerBuilding}>
                                    <img src="/icons/BuildingSVG/BuildingSVG3.svg" alt="BuildingSVG3" />
                                </div>
                                <div className={styles.donecTincidunt}>
                                    Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.
                                </div>
                            </div>
                        </div>
                    </div>
                    <Building />
                </div>
            </div>
        </section>
    );
}

export default BuildingPage;