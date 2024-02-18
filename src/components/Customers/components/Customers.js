import React from 'react';
import styles from './Customers.module.scss';
import CustomersStars from '../../../UI/CustomersStars';

const data = [
  {  
    text1: {
      content: "\"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus convallis elit.\"",
      width: '542px'
    }, 
    svg: { 
      src: '/pictures/DanaHale.png', 
      alt: 'DanaHale',
      width: '48px',
      height: '48px',
    },
    text2: "Dana Hale", 
    additionalText: "UI/UX Designer, Iniry" 
  },
  { 
    text1: {
      content: "\"In luctus convallis elit, vitae blandit elit volutpat a. Donec volutpat massa turpis, sed interdum dui aliquam id. Integer imperdiet odio sit amet faucibus auctor.\"",
      width: '511px'
    }, 
    svg: { 
      src: '/pictures/KyleCamden.png', 
      alt: 'KyleCamden',
      width: '48px',
      height: '48px',
    },
    text2: "Kyle Camden", 
    additionalText: "Front-end Developer, Dontechi" 
  },
  { 
    text1: {
      content:"\"Donec sodales turpis sollicitudin sodales sodales. Proin blandit congue ante sed scelerisque. Etiam sed metus sapien aenean eu euismod.\"",
      width: '551px'
    }, 
    svg: { 
      src: '/pictures/TravisElton.png', 
      alt: 'TravisElton',
      width: '48px',
      height: '48px',
    },
    text2: "Travis Elton", 
    additionalText: "Sales Manager, Kan-cod" 
  },
  { 
    text1: {
      content: "\"Aenean eu euismod sapien. Maecenas maximus velit turpis, sit amet sodales felis condimentum interdum. Donec sit amet placerat nunc. Fusce ultricies ex et arcu maximus faucibus. Sed ac rhoncus justo.\"",
      width: '556px'
    }, 
    svg: { 
      src: '/pictures/MonicaScarboro.png', 
      alt: 'MonicaScarboro',
      width: '48px',
      height: '48px',
    },
    text2: "Monica Scarboro", 
    additionalText: "CEO, Sonron" 
  },
  { 
    text1: {
      content: "\"In eros nunc, sagittis fermentum sagittis nec, porta vitae est. Sed felis nibh, commodo nec vestibulum in, tincidunt sodales lectus. Proin rutrum ut enim nec eleifend. Integer ante diam, imperdiet vel risus non, pretium placerat nisl.\"",
      width: '538px'
    },  
    svg: { 
      src: '/pictures/AnnaHanney.png', 
      alt: 'AnnaHanney',
      width: '48px',
      height: '48px',
    },
    text2: "Anna Hanney", 
    additionalText: "Head of Design, Betatech" 
  },
  { 
    text1: {
      content: "\"Duis at nisl nulla. Donec quis tortor tellus. Aenean sed turpis vulputate nunc dictum vulputate eu et sem. In dapibus elementum varius. Integer aliquet, ex at lacinia euismod, dolor nibh sodales ex.\"",
      width: '537px'
    }, 
    svg: { 
      src: '/pictures/MeganRoston.png', 
      alt: 'MeganRoston',
      width: '48px',
      height: '48px',
    },
    text2: "Megan Roston", 
    additionalText: "Copywriter, Openlane" 
  },
];

const Customers = () => {
  const firstThree = data.slice(0, 3);
  const lastThree = data.slice(3);

  return (
    <div className={styles.ContentContainer}>
      <div className={styles.TextContainer}>
        <h2>A words from our customers</h2>
        <p>Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.</p>
      </div>
      <div className={styles.CustomersContainer}>
        <div className={styles.FirstColumn}>
          {firstThree.map((item, index) => (
            <div className={styles.CustomerBackground} key={index}>
              <div className={styles.Customer}>
                <div>
                  <CustomersStars/>
                </div>
                <div style={{ width: item.text1.width }}>
                <p className={styles.CustomerMessage}>{item.text1.content}</p>
              </div>
                <div className={styles.CustomerInfo}>
                <img src={item.svg.src} alt={item.svg.alt} width={item.svg.width} height={item.svg.height} />
                  <div className={styles.CustomerText}>
                    <p className={styles.CustomerName}>{item.text2}</p>
                    <p className={styles.CustomerJob}>{item.additionalText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.SecondColumn}>
          {lastThree.map((item, index) => (
            <div className={styles.CustomerBackground} key={index}>
              <div className={styles.Customer}>
                <div>
                  <CustomersStars/>
                </div>
                <div style={{ width: item.text1.width }}>
                <p className={styles.CustomerMessage}>{item.text1.content}</p>
              </div>
                <div className={styles.CustomerInfo}>
                <img src={item.svg.src} alt={item.svg.alt} width={item.svg.width} height={item.svg.height} />
                <div className={styles.CustomerText}>
                    <p className={styles.CustomerName}>{item.text2}</p>
                    <p className={styles.CustomerJob}>{item.additionalText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;