import React from 'react';
import styles from './Building.module.scss';

const Building = () => {
  return (
    <div>
    <div className={styles.buildingcom}>
      <div className={styles.BuildingTextContainer}>
        <div className={styles.GetStartrdButton}>
          <div className={styles.GetStartedFrame}></div>
          <div className={styles.buildinggetstarted}>Get started</div>
        </div>
        <div className={styles.SVGContainerTFF}>
          <svg
            className={styles.buildingimage4}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7937 7.85074C10.9743 8.03136 10.9743 8.32415 10.7937 8.50476L6.07841 13.22C5.89779 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5285 5.20633 12.3479L9.37654 8.17775L5.20633 4.00755C5.02571 3.82693 5.02571 3.53413 5.20633 3.35351L5.42438 3.13546C5.605 2.95484 5.89779 2.95484 6.07841 3.13546L10.7937 7.85074Z"
              fill="#162E3C"
            />
          </svg>
          <div className={styles.buildingtryforfree}>Try for free</div>
        </div>
      </div>
      <div className={styles.BuildingTopText}>
        <div className={styles.buildingyour}>
          Building your very own Startup has never been simpler
        </div>
        <div className={styles.aeneandui}>
          Aenean dui justo, tempus sed odio ut, convallis accumsan nunc. Phasellus
          mauris sem, porta eu turpis vel, maximus condimentum turpis.
        </div>
      </div>
    </div>
    </div>
  );
}

export default Building;