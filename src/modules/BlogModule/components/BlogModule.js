import React from 'react';
import styles from './BlogModule.module.scss';  // Використовуємо модульні стилі
import Blog from '../../../components/Blog/BlogPhoto';
import BlogText from '../../../components/Blog/BlogText';

const BlogModule = () => {
    return (
        <section className={styles.blogpageMain}>
            <div className={styles.blogpageContainer}>
              <BlogText />
              <Blog />
              <button className={styles.ViewAllContainer}>
                <p>View all</p>
              </button>
            </div>
        </section>
    );
}

export default BlogModule;