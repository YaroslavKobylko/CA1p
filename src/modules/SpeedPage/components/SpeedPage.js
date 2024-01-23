import React from 'react';
import './SpeedPage.scss';
import SpeedSVG3 from '../../../UI/SpeedSVG3/SpeedSVG3';
import SpeedIncrease from '../../../UI/SpeedIncrease/SpeedIncrease';
import SpeedText from '../../../components/SpeedText';

const MainPage = () => {
    return (
        <main className='speed'>
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
      <SpeedSVG3/>
</div>
        </main>
    );
}

export default MainPage;