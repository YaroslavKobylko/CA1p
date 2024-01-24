import React from 'react';
import './BlogPage.scss';
import Blog from '../../../components/Blog';
import BlogText from '../../../components/BlogText';

const BlogPage = () => {
    return (
        <main className='blogpage-main'>
            <div class="blogpageframe">
              <Blog />
              <BlogText />
            </div>
        </main>
    );
}

export default BlogPage;