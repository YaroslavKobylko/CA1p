import React from 'react';
import './SpeedText.scss';
import GetStartedButton from '../../../UI/GetStartedButton';

const SpeedText = () => {
  return (
    <div class="speedframe7">
    <div class="speedframe8">
      <div class="speedrectangle3"></div>
      <div class="speedspeed">Speed</div>
    </div>
    <div class="speedframe9">
    <GetStartedButton/>
      <div class="speedframe11">
        <div class="speedrectangle5"></div>
        <svg
          class="speedimage2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7937 7.85074C10.9743 8.03136 10.9743 8.32415 10.7937 8.50476L6.07841 13.22C5.89779 13.4006 5.605 13.4006 5.42438 13.22L5.20633 13.002C5.02571 12.8214 5.02571 12.5285 5.20633 12.3479L9.37654 8.17775L5.20633 4.00755C5.02571 3.82693 5.02571 3.53413 5.20633 3.35351L5.42438 3.13546C5.605 2.95484 5.89779 2.95484 6.07841 3.13546L10.7937 7.85074Z"
            fill="#162E3C"
          />
        </svg>
        <div class="speedtry-for-free">Try for free</div>
      </div>
    </div>
    <div class="speedfaster-than-ever-before">Faster than ever before</div>
    <div
      class="speed-morbi"
    >
      Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis
      velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius.
      Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro,
      tempus sed oido.
    </div>
  </div>
  );
}

export default SpeedText;