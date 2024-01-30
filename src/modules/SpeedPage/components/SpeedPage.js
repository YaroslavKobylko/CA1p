import React from 'react';
import './SpeedPage.scss';
import SpeedIncrease from '../../../UI/SpeedIncrease';
import SpeedText from '../../../components/SpeedText';

const MainPage = () => {
    return (
        <section className='speed'>
            <div class="speedframe">
              <div class="speedframe2">
                <div class="speedframe3">
                  <img class="speedimage" src={process.env.PUBLIC_URL + '/pictures/Speed.png'} alt="SpeedPhoto" />
                  <div class="speedframe4">
                    <SpeedIncrease/>
                  </div>
                </div>
                <SpeedText/>
              </div>
              <div className="svg-container-speed">
              <img src="/icons/SpeedSVG3/SpeedSVG3.svg" alt="SpeedSVG" />
              </div>
</div>
        </section>
    );
}

export default MainPage;