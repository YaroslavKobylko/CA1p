import React from 'react';
import styles from './PricingPhoto.module.scss';

const PricingPhoto = () => {
  return (
   <div className={styles.ContentContainer}>
     <div className={styles.CommonPlanBackground}>
      <div className={styles.CommonPlanContainer}>
        <div className={styles.InfoContainer}>
          <div className={styles.SVGConatiner}>
            <img src='/icons/Pricing2.png' alt="Pricing" width={48} height={48}/>
          </div>
          <p className={styles.PlanType}>Basic plan</p>
          <div className={styles.PriceContainer}>
            <p className={styles.DollarPrice}>$19</p>
            <p className={styles.TimePrice}>/mo</p>
          </div>
          <div className={styles.YearlyPrice}>
            <p>or $199 yearly</p>
          </div>
          <div className={styles.LineContainer}></div>
          <p className={styles.Includes}>
            Includes:
          </p>
          <div className={styles.PlanDescription}>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Vestibulum posuere odio</p>
              </div>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Id purus maximus condimentum</p>
              </div>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Vel convallis nibh duis</p>
              </div>
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <p>Get started</p>
        </div>
      </div>
     </div>
     <div className={styles.BussinesPlanBackground}>
      <div className={styles.BussinesPlanContainer}>
        <div className={styles.BussinesInfoContainer}>
          <div className={styles.SVGConatiner}>
            <img src='/icons/Pricing1.png' alt="Pricing" width={48} height={48}/>
          </div>
          <p className={styles.BussinesPlanType}>Business plan</p>
          <div className={styles.BussinesPriceContainer}>
            <p className={styles.BussinesDollarPrice}>$29</p>
            <p className={styles.BussinesTimePrice}>/mo</p>
          </div>
          <div className={styles.BussinesYearlyPrice}>
            <p>or $299 yearly</p>
          </div>
          <div className={styles.BussinesLineContainer}></div>
          <p className={styles.BussinesIncludes}>
            Includes:
          </p>
          <div className={styles.BussinesPlanDescription}>
              <div className={styles.BussinesPointContainer}>
                <div className={styles.BussinesCircleContainer}></div>
                <p>Maximus condimentum turpis</p>
              </div>
              <div className={styles.BussinesPointContainer}>
                <div className={styles.BussinesCircleContainer}></div>
                <p>Nullam faucibus dictum accumsan</p>
              </div>
              <div className={styles.BussinesPointContainer}>
                <div className={styles.BussinesCircleContainer}></div>
                <p>Vivamus ante dolor</p>
              </div>
              <div className={styles.BussinesPointContainer}>
                <div className={styles.BussinesCircleContainer}></div>
                <p>Purus in convallis pharetra</p>
              </div>
          </div>
        </div>
        <div className={styles.BussinesButtonContainer}>
          <p>Get started</p>
        </div>
      </div>
     </div>
     <div className={styles.CommonPlanBackground}>
      <div className={styles.CommonPlanContainer}>
        <div className={styles.InfoContainer}>
          <div className={styles.SVGConatiner}>
            <img src='/icons/Pricing2.png' alt="Pricing" width={48} height={48}/>
          </div>
          <p className={styles.PlanType}>Enterprise plan</p>
          <div className={styles.PriceContainer}>
            <p className={styles.DollarPrice}>$49</p>
            <p className={styles.TimePrice}>/mo</p>
          </div>
          <div className={styles.YearlyPrice}>
            <p>or $499 yearly</p>
          </div>
          <div className={styles.LineContainer}></div>
          <p className={styles.Includes}>
            Includes:
          </p>
          <div className={styles.EnterprisePlan}>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Phasellus finibus lectus</p>
              </div>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>At blandit mollis maecenas</p>
              </div>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Nec ultrices lectus eune</p>
              </div>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Mattis facilisis lacus aliquet</p>
              </div>
              <div className={styles.PointContainer}>
                <div className={styles.CircleContainer}></div>
                <p>Am condimentum cursus</p>
              </div>
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <p>Get started</p>
        </div>
      </div>
     </div>
   </div>
  );
}

export default PricingPhoto;