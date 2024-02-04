import React from 'react';
import styles from './BlogPage.module.scss';  // Використовуємо модульні стилі
import Blog from '../../../components/Blog/BlogPhoto';
import BlogText from '../../../components/Blog/BlogText';

const BlogPage = () => {
    return (
        <section className={styles.blogpageMain}>
            <div className={styles.blogpageContainer}>
              <Blog />
              <BlogText />
            </div>
        </section>
    );
}

export default BlogPage;