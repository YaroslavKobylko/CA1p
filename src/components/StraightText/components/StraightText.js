import React from 'react';
import './StraightText.scss';
import GetStartedButton from '../../../UI/GetStartedButton';

const StraightText = () => {
  return (
<div class="straightframe2">
    <div class="straightframe3">
      <div class="straightrectangle"></div>
      <div class="straightefficient">Efficient</div>
    </div>
    <div class="straightframe4">
      <div class="straightframe5">
        <div class="straightframe6">
          <div class="straightrectangle2"></div>
          <img class="straightimage-2" src='/icons/Straight1.png' alt="No meetings"  />
        </div>
        <div class="straightno-meetings">No meetings</div>
        <div
          class="straightporta"
        >
          Porta non eros. Ut finibus viverra neque, sed vestibulum tellus
          volutpat ac cras at massa.
        </div>
      </div>
      <div class="straightframe7">
        <div class="straightframe6">
          <div class="straightrectangle2"></div>
          <img class="straightimage-3" src='/icons/Straight2.png' alt="24/7" />
        </div>
        <div class="straight_24-7-customer-support">24/7 customer support</div>
        <div
          class="straightpraesent"
        >
          Praesent consequat erat in orci lobortis, in accumsan orci vestibulum
          nam et dictum.
        </div>
      </div>
    </div>
    <div class="straightframe8">
      <div class="straightframe9">
      <GetStartedButton/>
      </div>
      <div class="straightframe10">
        <div class="straightrectangle4"></div>
        <svg
          class="straightimage"
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
        <div class="straighttry-for-free">Try for free</div>
      </div>
    </div>
    <div class="straightstraight-to-the-point">Straight to the point</div>
    <div
      class="straightvivamus"
    >
      Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna.
      Aenean consequat risus tortor, quis porta.
    </div>
  </div>
  );
}

export default StraightText;