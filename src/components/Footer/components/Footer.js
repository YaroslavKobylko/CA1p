import React from 'react';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    title: 'Pages',
    links: [
      'Home v1',
      'Home v2',
      'Home v3',
      'About v1',
      'About v2',
      'About v3',
      'Contact v1',
      'Contact v2',
      'Contact v3',
      'Blog',
      'Pricing',
      'Log in',
      'Sign up'
    ]
  },
  {
    title: 'CMS pages',
    links: ['Blog Post', 'Blog Categories']
  },
  {
    title: 'Utility pages',
    links: ['Style guide', 'Licenses', 'Changelog', '404', 'Password']
  }
];

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftPart}>
            <div className={styles.LogoConatiner}>
              <img src="/icons/FooterSVG/footer.svg" alt="FooterSVG" width={112} height={29} />
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
            {footerLinks.map((section, index) => (
              <div className={styles.Pages} key={index}>
                <p className={index === 0 ? styles.First : ''}>{section.title}</p>
                {section.links.map((link, idx) => (
                  <p key={idx}>{link}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.LineContainer}></div>
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
              <img src="/icons/FooterSVG/footer1.svg" alt="XSVG" width={24} height={24} />
            </div>
            <div className={styles.SocialContainer}>
              <img src="/icons/FooterSVG/footer2.svg" alt="LinkedinSVG" width={24} height={24}/>
            </div>
            <div className={styles.SocialContainer}>
              <img src="/icons/FooterSVG/footer3.svg" alt="FaceBookSVG" width={24} height={24}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;