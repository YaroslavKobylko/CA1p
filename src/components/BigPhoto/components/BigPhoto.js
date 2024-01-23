import React from 'react';
import './BigPhoto.scss';

const BigPhoto = () => {
  return (
    <div className="BigPhotoframe">
      <div className="BigPhotorectangle"></div>
      <div className="BigPhotoframe2">
        <div className="BigPhotorectangle2"></div>
        <img className="BigPhotoimage" src={process.env.PUBLIC_URL + '/pictures/BigPhoto.png'} alt="BigPhoto" />
        <div className="BigPhotoframe3">
          <div className="BigPhotorectangle3"></div>
          <div className="BigPhotowatch-introduction">Watch Introduction</div>
        </div>
        <div className="BigPhotorectangle4"></div>
      </div>
    </div>
  );
}

export default BigPhoto;