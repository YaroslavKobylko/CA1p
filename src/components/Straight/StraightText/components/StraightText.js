import React from 'react';
import styles from './StraightText.module.scss';
import GetStartedButton from '../../../../UI/GetStartedButton';

const StraightText = () => {
  return (
    <div className={styles.straightMainContainer}>
      <div className={styles.straightEfficientContainer}>
        <div className={styles.straightEfficientBackground}></div>
        <div className={styles.straightEfficient}>Efficient</div>
      </div>
      <div className={styles.straightMainTextContainer}>
        <div className={styles.straightMainText1 }>
          <div className={styles.straightPhotoContainer}>
            <div className={styles.straightPhotoBackground}></div>
            <img className={styles.straightImage2} src='/icons/Straight1.png' alt="No meetings" />
          </div>
          <div className={styles.straightNoMeetings}>No meetings</div>
          <div className={styles.straightPorta}>
            Porta non eros. Ut finibus viverra neque, sed vestibulum tellus
            volutpat ac cras at massa.
          </div>
        </div>
        <div className={styles.straightMainText2}>
          <div className={styles.straightPhotoContainer}>
            <div className={styles.straightPhotoBackground}></div>
            <img className={styles.straightImage3} src='/icons/Straight2.png' alt="24/7" />
          </div>
          <div className={styles.straight247Customer}>24/7 customer support</div>
          <div className={styles.straightPraesent}>
            Praesent consequat erat in orci lobortis, in accumsan orci vestibulum
            nam et dictum.
          </div>
        </div>
      </div>
      <div className={styles.GetStartedButtonContainer}>
        <div className={styles.GetStartedButton}>
          <GetStartedButton />
        </div>
        <div className={styles.straightSVGContainer}>
          <div className={styles.straightSVGBackground}></div>
          <img className={styles.straightImage} src='/icons/StraightSVG/StraightSVG1.svg' alt="StraightSVG" />
          <div className={styles.straightTryForFree}>Try for free</div>
        </div>
      </div>
      <div className={styles.straightStraightToThePoint}>Straight to the point</div>
      <div className={styles.straightVivamus}>
        Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna.
        Aenean consequat risus tortor, quis porta.
      </div>
    </div>
  );
}

export default StraightText;