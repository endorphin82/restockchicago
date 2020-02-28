import React from 'react';
import './styles.scss';

const FindYourFit = () => {
  return (
    <section className="find-your-fit">
      <div className="find-your-fit__title">
        <span>Find Your Fit</span>
      </div>
      <div className="find-your-fit__shop-men">
        <img src="img/shop-men2.png" alt=""/>
        <a href="#">Shop Men/Women</a>
      </div>
      <div className="find-your-fit__shop-kids">
        <img src="img/shop-kids2.png" alt=""/>
        <a href="#">Shop Kids</a>
      </div>
    </section>
  );
};

export default FindYourFit;