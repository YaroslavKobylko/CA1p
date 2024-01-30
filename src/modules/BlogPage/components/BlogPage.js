import React from 'react';
import './BlogPage.scss';
import Blog from '../../../components/Blog/BlogPhoto';
import BlogText from '../../../components/Blog/BlogText';

const BlogPage = () => {
    return (
        <section className='blogpage-main'>
            <div class="blogpageframe">
              <Blog />
              <BlogText />
            </div>
        </section>
    );
}

export default BlogPage;