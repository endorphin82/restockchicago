import React from 'react';
import logo from "./img/footer.svg"
import arrow_right from "./img/arrow_right.png"
import instagram from "./img/instagram.svg"
import facebook from "./img/facebook.svg"
import twitter from "./img/twitter.svg"
import "./Footer.scss"

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__logo">
        <img src={logo} alt=""/>
      </div>
      <div className="footer__terms">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer__help help">
        <p className="help__title">Heed help</p>
        <p className="help__list">Heed help</p>
      </div>
      <div className="footer__subscribe subscribe">
        <p className="subscribe__title">
          Sign up for our Newsletter
        </p>
        <div className="subscribe__container">
          <input autocomplete="off" type="text" name="form[]" data-value="" className="subscribe__input"/>
          <a href="#" className="subscribe__submit">
            <img src={arrow_right} alt=""/>
          </a>
        </div>
      </div>
      <div className="footer__social social">
        <div className="social__inst">
          <img src={instagram} alt="instagram"/>
        </div>
        <div className="social__fb">
          <div className="social__inst">
            <img src={facebook} alt="facebook"/>
          </div>
        </div>
        <div className="social__tw">
          <div className="social__inst">
            <img src={twitter} alt="twitter"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;