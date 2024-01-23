import React from 'react';
import './BuildingPage.scss';
import BuildingSVG1 from '../../../UI/BuildingSVG/BuildingSVG1';
import BuildingSVG2 from '../../../UI/BuildingSVG/BuildingSVG2';
import BuildingSVG3 from '../../../UI/BuildingSVG/BuildingSVG3';
import BuildingSVG4 from '../../../UI/BuildingSVG/BuildingSVG4';
import Building from '../../../components/Building';

const BuildingPage = () => {
    return (
        <main className='building-main'>
            <div className='building'>
<div class="buildingframe">
<BuildingSVG4/>
  <div class="buildingframe2">
    <div class="buildingframe3">
      <div class="buildingrectangle"></div>
        <BuildingSVG1/>
    </div>
        <BuildingSVG2/>
        <BuildingSVG3/>
  </div>
        <Building/>
</div>
</div>
        </main>
    );
}

export default BuildingPage;