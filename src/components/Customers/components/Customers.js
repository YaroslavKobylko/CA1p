import React from 'react';
import styles from './Customers.module.scss';
import CustomersStars from '../../../UI/CustomersStars';

const Customers= () => {
  return (
    <div>
    <div className={styles.CustomerContainer}>
    <div className={styles.Customer1}>
      <div className={styles.CustomerBackground1}></div>
      <div className={styles.CustomerStarsContainer}>
        <CustomersStars/>
      </div>
      <div className={styles.CustomerInfoContainer1}>
        <img className={styles.customerimage6} src='/pictures/DanaHale.png' alt="Dana Hale" />
        <div className={styles.CustomerText1}>
          <div className={styles.CustomerDanaHale}>Dana Hale</div>
          <div className={styles.CustomerJob1}>UI/UX Designer, Iniry</div>
        </div>
      </div>
      <div className={styles.CustomerPellentesque}>
        &quot;Pellentesque sodales libero nulla, ac imperdiet ante tincidunt
        vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In
        luctus convallis elit.&quot;
      </div>
    </div>
    <div className={styles.Customer2}>
      <div className={styles.CustomerBackground2}></div>
      <div className={styles.CustomerStarsContainer}>
        <CustomersStars/>
      </div>
      <div className={styles.CustomerInfoContainer1}>
        <img className={styles.customerimage6} src='/pictures/TravisElton.png' alt="Travis Elton" />
        <div className={styles.CustomerText2}>
          <div className={styles.customertravisElton}>Travis Elton</div>
          <div className={styles.CustomerJob2}>Sales Manager, Kan-cod</div>
        </div>
      </div>
      <div className={styles.CustomerDonec}>
        &quot;Donec sodales turpis sollicitudin sodales sodales. Proin blandit
        congue ante sed scelerisque. Etiam sed metus sapien aenean eu
        euismod.&quot;
      </div>
    </div>
    <div className={styles.Customer3}>
      <div className={styles.CustomerBackground3}></div>
      <div className={styles.CustomerStarsContainer}>
        <CustomersStars/>
      </div>
      <div className={styles.CustomerInfoContainer2}>
        <img className={styles.customerimage6} src='/pictures/AnnaHanney.png' alt="Anna Hanney" />
        <div className={styles.CustomerText3}>
          <div className={styles.CustomerAnnaHanney}>Anna Hanney</div>
          <div className={styles.CustomerJob3}>Head of Design, Betatech</div>
        </div>
      </div>
      <div className={styles.CustomerInEros}>
        &quot;In eros nunc, sagittis fermentum sagittis nec, porta vitae est.
        Sed felis nibh, commodo nec vestibulum in, tincidunt sodales lectus.
        Proin rutrum ut enim nec eleifend. Integer ante diam, imperdiet vel
        risus non, pretium placerat nisl.&quot;
      </div>
    </div>
    <div className={styles.Customer4}>
      <div className={styles.CustomerBackground3}></div>
      <div className={styles.CustomerStarsContainer}>
        <CustomersStars/>
      </div>
      <div className={styles.CustomerAeneanEu}>
        &quot;Aenean eu euismod sapien. Maecenas maximus velit turpis, sit amet
        sodales felis condimentum interdum. Donec sit amet placerat nunc. Fusce
        ultricies ex et arcu maximus faucibus. Sed ac rhoncus justo.&quot;
      </div>
      <div className={styles.CustomerInfoContainer2}>
        <div className={styles.CustomerText4}>
          <div className={styles.CustomerCeoSonron}>CEO, Sonron</div>
          <div className={styles.CustomerMonicaScarboro}>Monica Scarboro</div>
        </div>
        <img className={styles.customerimage6} src='/pictures/MonicaScarboro.png' alt="Monica Scarboro" />
      </div>
    </div>
    <div className={styles.Customer5}>
      <div className={styles.CustomerBackground5}></div>
      <div className={styles.CustomerStarsContainer}>
        <CustomersStars/>
      </div>
      <div className={styles.CustomerDuisAt}>
        &quot;Duis at nisl nulla. Donec quis tortor tellus. Aenean sed turpis
        vulputate nunc dictum vulputate eu et sem. In dapibus elementum varius.
        Integer aliquet, ex at lacinia euismod, dolor nibh sodales ex.&quot;
      </div>
      <div className={styles.CustomerInfoContainer2}>
        <div className={styles.CustomerText5}>
          <div className={styles.CustomerJob5}>Copywriter, Openlane</div>
          <div className={styles.CustomerMeganRoston}>Megan Roston</div>
        </div>
        <img className={styles.customerimage6} src='/pictures/MeganRoston.png' alt="Megan Roston" />
      </div>
    </div>
    <div className={styles.Customer6}>
      <div className={styles.CustomerBackground6}></div>
      <div className={styles.CustomerStarsContainer}>
        <CustomersStars/>
      </div>
      <div className={styles.CustomerInLuctus}>
        &quot;In luctus convallis elit, vitae blandit elit volutpat a. Donec
        volutpat massa turpis, sed interdum dui aliquam id. Integer imperdiet
        odio sit amet faucibus auctor.&quot;
      </div>
      <div className={styles.CustomerInfoContainer1}>
        <div className={styles.CustomerText6}>
          <div className={styles.CustomerJob6}>
            Front-end Developer, Dontechi
          </div>
          <div className={styles.CustomerKyleCamden}>Kyle Camden</div>
        </div>
        <img className={styles.customerimage6} src='/pictures/KyleCamden.png' alt="Kyle Camden" />
      </div>
    </div>
  </div>
  <div className={styles.CustomerTitleContainer}>
      <div className={styles.CustomerEuTurpis}>
        Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.
      </div>
      <div className={styles.CustomerAWords}>A words from our customers</div>
    </div>
  </div>
  );
}

export default Customers;