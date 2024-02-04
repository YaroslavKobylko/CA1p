import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
<footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.footertextcontainer}>
          <div className={styles.footerleftpart}>
            <div className={styles.footersvgcontainer}>
              <img src="/icons/FooterSVG/footer.svg" alt="FooterSVG" />
            </div>
            <div className={styles.footerContactContainer}>
              <div className={styles.footerNumberContainer}>
                <div className={styles.footer_Number}>1800 123 4567</div>
              </div>
              <div className={styles.footerAdress}>
                Level 1, 12 Nikola Tesla street, Niš, Serbia
              </div>
              <div className={styles.footercontact}>Contact:</div>
              <div className={styles.footeremailcontainer}>
                <div className={styles.footeremail}>info@startico.io</div>
              </div>
              <div className={styles.footeraddress}>Address:</div>
            </div>
          </div>
          <div className={styles.footerrightpart}>
            <div className={styles.footerPages}>
              <div className={styles.footerHomeV1Container}>
                <div className={styles.footerhome_v_1}>Home v1</div>
              </div>
              <div className={styles.footerHomeV3Container}>
                <div className={styles.footerhome_v_3}>Home v3</div>
              </div>
              <div className={styles.footerAboutV2Container}>
                <div className={styles.footerabout_v_2}>About v2</div>
              </div>
              <div className={styles.footerContactV1Container}>
                <div className={styles.footercontact_v_1}>Contact v1</div>
              </div>
              <div className={styles.footerContactV3Container}>
                <div className={styles.footercontact_v_3}>Contact v3</div>
              </div>
              <div className={styles.footerPricingContainer}>
                <div className={styles.footerpricing}>Pricing</div>
              </div>
              <div className={styles.footerSignUpContainer}>
                <div className={styles.footersign_up}>Sign up</div>
              </div>
              <div className={styles.footerpages}>Pages</div>
              <div className={styles.footerHomeV2Container}>
                <div className={styles.footerhome_v_2}>Home v2</div>
              </div>
              <div className={styles.footerAboutV3Container}>
                <div className={styles.footerabout_v_3}>About v3</div>
              </div>
              <div className={styles.footerBlogContainer}>
                <div className={styles.footerblog}>Blog</div>
              </div>
              <div className={styles.footerContactV2Container}>
                <div className={styles.footercontact_v_2}>Contact v2</div>
              </div>
              <div className={styles.footerAboutV1Container}>
                <div className={styles.footerabout_v_1}>About v1</div>
              </div>
              <div className={styles.footerLogInContainer}>
                <div className={styles.footerlog_in}>Log in</div>
              </div>
            </div>
            <div className={styles.CMSPagesContainer}>
            <div className={styles.BlogCategoriesContainer}>
              <div className={styles.footerblog_categories}>Blog Categories</div>
            </div>
            <div className={styles.footercms_pages}>CMS pages</div>
            <div className={styles.BlogPostContainer}>
              <div className={styles.footerblog_post}>Blog Post</div>
            </div>
          </div>
          <div className={styles.UtilityPages}>
            <div className={styles.LicensesContainer}>
              <div className={styles.footerlicenses}>Licenses</div>
            </div>
            <div className={styles.Container404}>
              <div className={styles.footer_404}>404</div>
            </div>
            <div className={styles.ChangelogContainer}>
              <div className={styles.footerchangelog}>Changelog</div>
            </div>
            <div className={styles.footerutility_pages}>Utility pages</div>
            <div className={styles.StyleGuideContainer}>
              <div className={styles.footerstyle_guide}>Style guide</div>
            </div>
            <div className={styles.PasswordContainer}>
              <div className={styles.footerpassword}>Password</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLine}></div>
          <div className={styles.FooterBottom}>
            <div className={styles.footerBootomLeft}>
              <div className={styles.WebFlowContainer}>
                <div className={styles.footerwebflow}>Webflow</div>
              </div>
              <div className={styles.footerpowered_by}>Powered by</div>
              <div className={styles.footerdiv}>.</div>
              <div className={styles.footerframe35}>
                <div className={styles.footerminima_square}>Minima Square</div>
              </div>
              <div className={styles.footerdiv2}>.</div>
              <div className={styles.footerstartico_by}>© Startico by</div>
            </div>
            <div className={styles.footerBootomRight}>
              <div className={styles.XContainer}>
                <div className={styles.XFrame}></div>
                <img src="/icons/FooterSVG/footer1.svg" alt="XSVG" />
              </div>
              <div className={styles.LinkedinContainer}>
                <div className={styles.XFrame}></div>
                <img src="/icons/FooterSVG/footer2.svg" alt="LinkedinSVG" />
              </div>
              <div className={styles.FaceBookContainer}>
                <div className={styles.XFrame}></div>
                <img src="/icons/FooterSVG/footer3.svg" alt="FaceBookSVG" />
              </div>
            </div>
          </div>
</div>

    </footer>
  );
}

export default Footer;