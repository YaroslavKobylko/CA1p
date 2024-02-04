import React from 'react';
import styles from './BlogPhoto.module.scss';

const BlogPhoto = () => {
  return (
    <div>
    <div className={styles.BlogPageTopic}>
      <div className={styles.BlogPageTopic1}>
        <div className={styles.BlogPageContur}></div>
        <div className={styles.BlogPagePhoto1}>
          <img className={styles.blogpageimage} src='/pictures/Blog1.png' alt="Blog1" />
        </div>
        <div className={styles.BlogPageText1}>
          <div className={styles.BlogPageTextContainer1}>
            <div className={styles.BlogPageMainText1}>
              <div className={styles.BlogPageBusContainer}>
                <div className={styles.BlogPageBusContur}></div>
                <div className={styles.blogpagebusiness}>Business</div>
              </div>
              <div className={styles.BlogPage_7minread}>7 min read</div>
            </div>
            <div className={styles.BlogPage10MistakesText}>
              <div className={styles.BlogPageTop10mistakes}>
                Top 10 mistakes startaps in 2022 make and how to avoid them
              </div>
            </div>
            <div className={styles.BlogPageIpsum}>
              Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut officiis.
              Eligendi impedit rerum et beatae itaque corrupti. Sed nesciunt
              delectus sequi harum d
            </div>
          </div>
          <div className={styles.BlogPageRMLink}>
            <div className={styles.BlogPageReadMore}>Read more</div>
            <img src="/icons/BlogSVG/BlogSVG.svg" alt="Blog Icon" />
          </div>
        </div>
      </div>
      <div className={styles.BlogPageTopic2}>
  <div className={styles.BlogPageContur}>
    <img className={styles.blogpageimage} src='/pictures/Blog2.png' alt="Blog2" />
  </div>
  <div className={styles.BlogPageText2}>
    <div className={styles.BlogPageTextContainer2}>
      <div className={styles.BlogPageMainText1}>
        <div className={styles.BlogPageBusContainer}>
          <div className={styles.BlogPageBusContur}></div>
          <div className={styles.blogpagebusiness}>Business</div>
        </div>
        <div className={styles.BlogPage_11minread}>11 min read</div>
      </div>
      <div
            className={styles.BlogPageEtAd_Placeat}
          >
            Et ad placeat quo rerum earum. Est est ea perspiciatis facere
            voluptas qui sit exercitationem autem. Qui maxime pariatur nobis est
            et culpa itaque consequatur.
          </div>
      <div className={styles.BlogPage10MistakesText}>
        <div className={styles.BlogPageHowManyText}>
          How many participants for a new hire interview
        </div>
      </div>
    </div>
    <div className={styles.BlogPageRMLink}>
        <div className={styles.BlogPageReadMore}>Read more</div>
        <img src="/icons/BlogSVG/BlogSVG.svg" alt="Blog Icon" />
    </div>
  </div>
</div>
<div className={styles.BlogPageTopic3}>
  <div className={styles.BlogPageContur}>
    <img className={styles.blogpageimage} src='/pictures/Blog3.png' alt="Blog3" />
  </div>
  <div className={styles.BlogPageText2}>
    <div className={styles.BlogPageTextContainer2}>
      <div className={styles.BlogPageMainText1}>
        <div className={styles.BlogPageToolsContainer}>
          <div className={styles.BlogPageBusContur}></div>
          <div className={styles.blogpagetools}>Tools</div>
        </div>
        <div className={styles.BlogPage_5minread}>5 min read</div>
      </div>
      <div className={styles.BlogPageEst_Est}>
            Est est ea perspiciatis facere voluptas qui sit exercitationem
            autem. Et ad placeat quo rerum earum. Qui maxime pariatur nobis est
            et culpa itaque consequatur.
          </div>
      <div className={styles.BlogPage10MistakesText}>
        <div className={styles.BlogPageTwoBusinessTools}>
          Two business tools that have made my job way easier
        </div>
      </div>
    </div>
    <div className={styles.BlogPageRMLink}>
      <div className={styles.BlogPageReadMore}>Read more</div>
      <img src="/icons/BlogSVG/BlogSVG.svg" alt="Blog Icon" />
    </div>
  </div>
</div>
<div className={styles.ViewAllContainer}>
  <div className={styles.ViewAllContur}></div>
  <div className={styles.BlogPageViewAll}>View all</div>
</div>
</div>
  </div>
  );
}

export default BlogPhoto;