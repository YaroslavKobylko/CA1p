import React from 'react';
import styles from './StraightText.module.scss';
import GetStartedButton from '../../../../UI/GetStartedButton';

const StraightText = () => {
  return (
    <div className={styles.ContentContainer}>
      <div className={styles.Efficient}>
        <p>Efficient</p>
      </div>
      <div className={styles.TextContainer}>
        <p className={styles.TitleText}>Straight to the point</p>
        <p className={styles.SubtitleText}>Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna. Aenean consequat risus tortor, quis porta.</p>
      </div>
      <div className={styles.Advantages}>
        <div className={styles.NoMeetingContainer}>
          <div className={styles.SVGContainer}>
          <img className={styles.NoMeetingSVG} src='/icons/Straight1.png' alt="No meetings" width={32}  height={32}/>
          </div>
          <p className={styles.NoMeetingTitle}>No meetings</p>
          <p className={styles.NoMeetingSubtitle}>Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.</p>
        </div>
        <div className={styles.NoMeetingContainer}>
        <div className={styles.SVGContainer}>
          <img className={styles.NoMeetingSVG}  src='/icons/Straight2.png' alt="24/7" width={32}  height={32} />
          </div>
          <p className={styles.NoMeetingTitle}>24/7 customer support</p>
          <p className={styles.NoMeetingSubtitle}>Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.</p>
        </div>
      </div>
      <div className={styles.GetStartedContainer}>
        <div>
          <GetStartedButton />
        </div>
        <div className={styles.TryForContainer}>
          <p>Try for free</p>
          <img src='/icons/StraightSVG/StraightSVG1.svg' alt="StraightSVG"  width={16}  height={16}/>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default StraightText;