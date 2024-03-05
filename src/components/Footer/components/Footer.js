import React from 'react';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    title: 'Pages',
    links: [
      { url: '/home-v1', label: 'Home v1' },
      { url: '/home-v2', label: 'Home v2' },
      { url: '/home-v3', label: 'Home v3' },
      { url: '/about-v1', label: 'About v1' },
      { url: '/about-v2', label: 'About v2' },
      { url: '/about-v3', label: 'About v3' },
      { url: '/contact-v1', label: 'Contact v1' },
      { url: '/contact-v2', label: 'Contact v2' },
      { url: '/contact-v3', label: 'Contact v3' },
      { url: '/blog', label: 'Blog' },
      { url: '/pricing', label: 'Pricing' },
      { url: '/login', label: 'Log in' },
      { url: '/signup', label: 'Sign up' }
    ]
  },
  {
    title: 'CMS pages',
    links: [
      { url: '/blog-post', label: 'Blog Post' },
      { url: '/blog-categories', label: 'Blog Categories' }
    ]
  },
  {
    title: 'Utility pages',
    links: [
      { url: '/style-guide', label: 'Style guide' },
      { url: '/licenses', label: 'Licenses' },
      { url: '/changelog', label: 'Changelog' },
      { url: '/404', label: '404' },
      { url: '/password', label: 'Password' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftPart}>
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
                <p><a href="tel:18001234567">1800 123 4567</a></p>
                <p><a href="mailto:info@startico.io">info@startico.io</a></p>
              </div>
            </div>
          </div>
          </div>
          <div className={styles.RightPart}>
          {footerLinks.map((section, index) => (
            <div className={styles.Pages} key={index}>
              <p className={index === 0 ? styles.First : ''}>{section.title}</p>
              {section.links.map((link, idx) => (
                <p key={idx}><a href={link.url}>{link.label}</a></p>
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
              <a href="link-to-x" className={styles.LinkToSocial}>
                <img src="/icons/FooterSVG/footer1.svg" alt="XSVG" width={24} height={24} />
              </a>
            </div>
            <div className={styles.SocialContainer}>
              <a href="link-to-linkedin" className={styles.LinkToSocial}>
                <img src="/icons/FooterSVG/footer2.svg" alt="LinkedinSVG" width={24} height={24} />
              </a>
            </div>
            <div className={styles.SocialContainer}>
              <a href="link-to-facebook" className={styles.LinkToSocial}>
                <img src="/icons/FooterSVG/footer3.svg" alt="FaceBookSVG" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;