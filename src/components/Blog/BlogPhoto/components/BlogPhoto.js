import React from 'react';
import styles from './BlogPhoto.module.scss';

const BlogPhoto = () => {
  const data = [
    {
      image: '/pictures/Blog1.png',
      text1: 'Business',
      text2: '7 min read',
      text3: 'Top 10 mistakes startaps in 2022 make and how to avoid them',
      text4: 'Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed nesciunt delectus sequi harum d',
      container: {
        width: '355.33px',
        height: '238px',
      }
    },
    {
      image: '/pictures/Blog2.png',
      text1: 'Business',
      text2: '11 min read',
      text3: 'How many participants for a new hire interview',
      text4: 'Et ad placeat quo rerum earum. Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Qui maxime pariatur nobis est et culpa itaque consequatur.',
      container: {
        width: '355.33px',
        height: '225px',
      }
    },
    {
      image: '/pictures/Blog3.png',
      text1: 'Tools',
      text2: '5 min read',
      text3: 'Two business tools that have made my job way easier',
      text4: 'Est est ea perspiciatis facere voluptas qui sit exercitationem autem. Et ad placeat quo rerum earum. Qui maxime pariatur nobis est et culpa itaque consequatur.',
      container: {
        width: '355.33px',
        height: '225px',
      }
    },
  ];

  return (
    <div className={styles.ContentContainer}>
      {data.map((item, index) => (
        <div className={styles.QuestionContainer} key={index}>
          <div>
            <img src={item.image} alt="Picture" width={402} height={300}/>
          </div>
          <div className={styles.TextContainer}>
          <div className={styles.RecomendationContainer} style={{ width: item.container.width, height: item.container.height }}>
              <div className={styles.CategoryContainer}>
                <div className={styles.Category}>
                  <p>{item.text1}</p>
                </div>
                <p className={styles.CategoryTime}>{item.text2}</p>
              </div>
              <div className={styles.TitleConatiner}><p>{item.text3}</p></div>
              <div className={styles.SubtitleConatiner}><p>{item.text4}</p></div>
            </div>
              <div className={styles.ReadMoreContainer}>
                <div><img src="/icons/BlogSVG/BlogSVG.svg" alt="Blog Icon" width={32} height={32}/></div>
                <div><p>Read more</p></div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPhoto;