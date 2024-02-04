import React from 'react';
import styles from './StayUp.module.scss';

const StayUp = () => {
  return (
    <div className={styles.stayUpContainer}>
      <div className={styles.stayUpBackground}></div>
      <div className={styles.StayUpMainPart}>
        <div className={styles.StayUpGreenBack}></div>
        <div className={styles.svgContainerStayUp}>
          <img src="/icons/StayUpSVG/StayUpSVG.svg" alt="StayUpSVG" />
        </div>
        <div className={styles.StayUpTextContainer}>
          <div className={styles.EtiamVolatpatContainer}>
            <div className={styles.TextBackgroundEtiam}></div>
            <div className={styles.EtiamVolatpat}>
              Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin
              rutrum, purus in convallis pharetra, risus leo sagittis.
            </div>
          </div>
          <div className={styles.FormContainer}>
            <form className={styles.StayUpForm}>
              <div className={styles.stayUpEnterYourEmail}>
                <label className={styles.inputLabel} htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.stayUpInput}
                />
              </div>
              <button type="submit" className={styles.stayUpSubscribe}>Subscribe</button>
            </form>
            <div className={styles.ByClickingContainer}>
              <div className={styles.ByClickingBackground}></div>
              <div className={styles.stayUpByClicking}>
                By clicking Subscribe you're confirming that you agree with our
                Terms and Conditions.
              </div>
            </div>
          </div>
          <div className={styles.stayUpStayUpToDate}>
            Stay up to date with the latest news from the Startup world!
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayUp;