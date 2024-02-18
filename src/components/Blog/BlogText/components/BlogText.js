import React from 'react';
import styles from './BlogText.module.scss';

const BlogText = () => {
  return (
    <div className={styles.TextContainer}>
      <div className={styles.Blog}>
        <p>Blog</p>
      </div>
      <div className={styles.LatestBlog}>
        <p>Our latest blogs</p>
      </div>
      <div className={styles.BlogSubtitle}>
        <p>Accumsan semper euismod dolor vitae metus.</p>
      </div>
    </div>
  );
}

export default BlogText;