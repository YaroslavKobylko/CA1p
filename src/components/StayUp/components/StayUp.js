import React from 'react';
import './StayUp.scss';

const StayUp = () => {
  return (
    <div class="stayupframe">
<div class="stayuprectangle"></div>
<div class="stayupframe2">
<div class="stayuprectangle2"></div>
<div className="svg-container-stayup">
<img src="/icons/StayUpSVG/StayUpSVG.svg" alt="StayUpSVG" />
</div>
<div class="stayupframe3">
<div class="stayupframe4">
<div class="stayuprectangle3"></div>
<div
  class="stayupetiam-volutpat-ligula-nec-orci-egestas-at-porta-massa-tempor-proin-rutrum-purus-in-convallis-pharetra-risus-leo-sagittis"
>
  Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin
  rutrum, purus in convallis pharetra, risus leo sagittis.
</div>
</div>
<div class="stayupframe5">
<form className="stayupframe6">
  <div className="stayupenter-your-email">
    <label className="input-label" htmlFor="email">Enter your email</label>
    <input
      type="email"
      id="email"
      name="email"
      className="stayup-input"
    />
  </div>
  <button type="submit" className="stayupsubscribe">Subscribe</button>
</form>
<div class="stayupframe7">
  <div class="stayuprectangle6"></div>
  <div
    class="stayupby-clicking-subscribe-you-re-confirming-that-you-agree-with-our-terms-and-conditions"
  >
    By clicking Subscribe you&#039;re confirming that you agree with our
    Terms and Conditions.
  </div>
</div>
</div>
<div class="stayupstay-up-to-date-with-the-latest-news-from-the-startup-world">
Stay up to date with the latest news from the Startup world!
</div>
</div>
</div>
</div>
  );
}

export default StayUp;