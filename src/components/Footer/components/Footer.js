import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftPart}>
            <div className={styles.LogoConatiner}>
              <img src="/icons/FooterSVG/footer.svg" alt="FooterSVG" width={112} height={29}/>
            </div>
            <div className={styles.ContactContainer}>
              <div className={styles.Adress}>
                <p>Address:</p>
                <p>Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
              </div>
              <div className={styles.Contact}>
                <p>Contact:</p>
                <p>1800 123 4567</p>
                <p>info@startico.io</p>
              </div>
            </div>
          </div>
          <div className={styles.RightPart}>
            <div className={styles.Pages}>
              <p className={styles.First}>Pages</p>
              <p>Home v1</p>
              <p>Home v2</p>
              <p>Home v3</p>
              <p>About v1</p>
              <p>About v2</p>
              <p>About v3</p>
              <p>Contact v1</p>
              <p>Contact v2</p>
              <p>Contact v3</p>
              <p>Blog</p>
              <p>Pricing</p>
              <p>Log in</p>
              <p>Sign up</p>
            </div>
            <div className={styles.Pages}>
            <p className={styles.First}>CMS pages</p>
              <p>Blog Post</p>
              <p>Blog Categories</p>
            </div>
            <div className={styles.Pages}>
            <p className={styles.First}>Utility pages</p>
            <p>Style guide</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>404</p>
            <p>Password</p>
            </div>
          </div>
        </div>
        <div className={styles.LineContainer}>
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.TextContainer}>
            <p>© Startico by</p>
            <p>Minima Square</p>
            <p>.</p>
            <p>Powered by</p>
            <p>Webflow</p>
            <p>.</p>
          </div>
          <div className={styles.SVGConatiner}>
            <div className={styles.SocialContainer}>
            <img src="/icons/FooterSVG/footer1.svg" alt="XSVG" width={24} height={24}/>
            </div>
            <div className={styles.SocialContainer}>
            <img src="/icons/FooterSVG/footer2.svg" alt="LinkedinSVG" />
            </div>
            <div className={styles.SocialContainer}>
            <img src="/icons/FooterSVG/footer3.svg" alt="FaceBookSVG" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;