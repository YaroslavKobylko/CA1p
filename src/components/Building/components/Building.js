import React from 'react';
import styles from './Building.module.scss';

const Benefits = ({ svg, title, subtitle }) => (
  <div className={styles.Advantage}>
    <div className={styles.SVGContainer}>{svg}</div>
    <h2>{title}</h2>
    <p style={{ width: subtitle.width, height: subtitle.height }}>{subtitle.text}</p>
  </div>
);

const Building = () => {

  const data = [
    { 
      svg: <img src="/icons/BuildingSVG/BuildingSVG1.svg" alt="BuildingSVG1" width={100} height={100}/>,
      title: 'Better results', 
      subtitle: { text: 'Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.', width: '255px', height: '72px' } 
    },
    { 
      svg: <img src="/icons/BuildingSVG/BuildingSVG2.svg" alt="BuildingSVG2" width={100} height={100}/>,
      title: 'Less paper work', 
      subtitle: { text: 'Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.', width: '279px', height: '72px' }
    },
    { 
      svg: <img src="/icons/BuildingSVG/BuildingSVG3.svg" alt="BuildingSVG3" width={100} height={100}/>,
      title: 'More profit', 
      subtitle: { text: 'Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.', width: '278px', height: '72px' }
    },
  ];

  return (
    <div className={styles.BackgroundContainer}>
    <div className={styles.ContentContainer}>
      <div className={styles.TextContainer}>
        <div>
          <h2 className={styles.TitleText}>Building your very own Startup has never been simpler</h2>
        </div>
        <div>
          <p className={styles.SubtitleText}>Aenean dui justo, tempus sed odio ut, convallis accumsan nunc. Phasellus mauris sem, porta eu turpis vel, maximus condimentum turpis.</p>
        </div>
      </div>
      <div className={styles.AdvantagesContainer}>
          {data.map((item, index) => (
            <Benefits
              key={index} 
              svg={item.svg} 
              title={item.title} 
              subtitle={item.subtitle} 
            />
          ))}
        </div>
        <div className={styles.GetStartedContainer}>
        <button className={styles.GetStartedButton}>
          <p>Get started</p>
        </button>
        <div className={styles.TryForContainer}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={styles.TryForLink}>Try for free</a>
          <img src="/icons/BuildingSVG/Building.svg" alt="Building" />
        </div>
      </div>
      </div>
      <div className={styles.svgContainerBuilding1}>
            <img src="/icons/BuildingSVG/BuildingSVG4.svg" alt="BuildingSVG4" />
      </div>
    </div>
  );
}

export default Building;