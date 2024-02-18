import React from 'react';
import styles from './StayUp.module.scss';

const StayUp = () => {
  return (
    <div className={styles.ContentBackground}>
      <div className={styles.ContentContainer}>
        <div className={styles.TitleText}><p>Stay up to date with the latest news from the Startup world!</p></div>
        <div className={styles.SubtitleText}><p>Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin rutrum, purus in convallis pharetra, risus leo sagittis.</p></div>
        <div className={styles.FormContainer}>
            <form className={styles.Form}>
              <div className={styles.FormBackground}>
                <label className={styles.InputLabel} htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.InputBackground}
                />
              </div>
              <button type="submit" className={styles.SubscribeButton}>Subscribe</button>
            </form>
            <div>
              <div className={styles.Description}><p>
                By clicking Subscribe you're confirming that you agree with our
                Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.svgContainerStayUp}>
          <img src="/icons/StayUpSVG/StayUpSVG.svg" alt="StayUpSVG" />
        </div>
    </div>
  );
}

export default StayUp;