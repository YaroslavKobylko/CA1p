import React from 'react';

const SpeedIncrease = () => {
    return (
<div className="svg-container">
<div class="speedrectangle"></div>
                    <div class="speedframe5">
                      <div class="speedrectangle2"></div>
                      <img class="speedimage-1" src={process.env.PUBLIC_URL + '/icons/SpeedIncreased.png'} alt="SpeedIncreasedPhoto" />
                    </div>
                    <div class="speedframe6">
                      <div class="speedincreased-in-sales">Increased in sales</div>
                      <div class="speed_86">86%</div>
                    </div>
                  </div>
    );
}

export default SpeedIncrease;