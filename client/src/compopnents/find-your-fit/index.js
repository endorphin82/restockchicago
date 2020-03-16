import React from 'react';
import './styles.scss';
import shop_men from './img/shop_men2.png'
import shop_kids from './img/shop_kids2.png'

const FindYourFit = () => {
  return (
    <section className="find-your-fit">
      <div className="find-your-fit__title">
        <span>Find Your Fit</span>
      </div>
      <div className="find-your-fit__shop-men">
        <img src={shop_men} alt="shop men or women"/>
        <a href="#">Shop Men/Women</a>
      </div>
      <div className="find-your-fit__shop-kids">
        <img src={shop_kids} alt="shop kids"/>
        <a href="#">Shop Kids</a>
      </div>
    </section>
  );
};

export default FindYourFit;