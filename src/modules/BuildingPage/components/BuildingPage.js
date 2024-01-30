import React from 'react';
import './BuildingPage.scss';
import Building from '../../../components/Building';

const BuildingPage = () => {
    return (
        <section className='building-main'>
            <div className='building'>
<div class="buildingframe">
<div class="buildingsvg4">
<div class="svg-container-building-4">
          <img src="/icons/BuildingSVG/BuildingSVG4.svg" alt="BuildingSVG4" />
</div>
</div>
  <div class="buildingframe2">
    <div class="buildingframe3">
      <div class="buildingrectangle"></div>
      <div class="buildingframe4">
        <div class="buildingbetter-results">Better results</div>
        <div class="svg-container-building">
          <img src="/icons/BuildingSVG/BuildingSVG1.svg" alt="BuildingSVG1" />
        </div>
        <div
          class="vestibulum"
        >
          Vestibulum posuere odio id purus maximus, vel condimentum nunc
          tincidunt. Duis sit amet vulputa.
        </div>
      </div>
    </div>
    <div class="buildingframe5">
      <div class="buildingrectangle"></div>
      <div class="buildingframe6">
        <div class="buildingless-paper-work">Less paper work</div>
        <div class="svg-container-building">
          <img src="/icons/BuildingSVG/BuildingSVG2.svg" alt="BuildingSVG2" />
        </div>
        <div
          class="duis-convallis"
        >
          Duis convallis eros eu dolor posuere, sit amet mollis turpis
          elementum. Aliquam ut sapien enim.
        </div>
      </div>
    </div>
    <div class="buildingframe7">
      <div class="buildingrectangle"></div>
      <div class="buildingframe8">
        <div class="buildingmore-profit">More profit</div>
        <div class="svg-container-building">
          <img src="/icons/BuildingSVG/BuildingSVG3.svg" alt="BuildingSVG3" />
        </div>
        <div
          class="donec-tincidunt"
        >
          Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros.
          Proin finibus luctus nisi.
        </div>
      </div>
    </div>
  </div>
        <Building/>
</div>
</div>
        </section>
    );
}

export default BuildingPage;