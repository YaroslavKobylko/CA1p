import React from 'react';
import styles from './BlogText.module.scss';

const BlogText = () => {
  return (
    <div className={styles.BlogPageTextContainer}>
      <div>
        <div className={styles.BlogPageButtonContainer}>
          <div className={styles.BlogPageButtonBackground}></div>
          <div className={styles.BlogPageButtonBlog}>Blog</div>
        </div>
        <div className={styles.BlogPageOurLatest}>Our latest blogs</div>
        <div className={styles.BlogPageAccumsan}>
          Accumsan semper euismod dolor vitae metus.
        </div>
      </div>
    </div>
  );
}

export default BlogText;