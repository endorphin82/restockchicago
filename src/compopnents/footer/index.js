import React from 'react';
import logo from "./img/footer.svg"
import arrow_right from "./img/arrow_right.png"
import "./styles.scss"

const Footer = () => {
    return (
        <section className="footer">

            <div className="footer__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="footer__terms terms">
                <p><a href="#">Terms of Use</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </div>

            <div className="footer__help help">
                <p className="help__title">Heed help</p>
                <ul className="help__list">
                    <li><a href="#">
                        Order Status
                    </a></li>
                    <li><a href="#">
                        Consignment
                    </a></li>
                    <li><a href="#">
                        Shipping and Returns
                    </a></li>
                    <li><a href="#">
                        Contact Us
                    </a></li>
                </ul>
            </div>
            <div className="footer__subscribe subscribe">
                <p className="subscribe__title">
                    Sign up for our Newsletter
                </p>
                <form action="#" className="subscribe__form">
                    <div className="subscribe__input">
                        <input type="text" name="email" title="Sign up for our Newsletter"
                               placeholder="Enter your email" autoCapitalize="off" autoCorrect="off"
                               spellCheck="false"/>
                    </div>
                    <a href="#" className="subscribe__submit">
                        <img src={arrow_right} title="Sign up for our Newsletter" alt=""/>
                    </a>
                </form>
            </div>
            <div className="footer__social social">
                <a href="#" className="social__link">
                    <svg id="ei-sc-instagram-icon" viewBox="0 0 50 50">
                        <path
                            d="M25 12c-3.53 0-3.973.015-5.36.078-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5 6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36.063 1.384.283 2.329.604 3.155.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604 1.387.063 1.83.078 5.36.078 3.53 0 3.973-.015 5.36-.078 1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5 6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.387.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303 6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076 1.267.058 1.956.27 2.414.448.607.236 1.04.517 1.495.972.455.455.736.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495 4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972 4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076"></path>
                        <path
                            d="M25 18a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0"></path>
                    </svg>
                </a>
                <a href="#" className="social__link">
                    <svg id="ei-sc-facebook-icon" viewBox="0 0 50 50">
                        <path
                            d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path>
                    </svg>
                </a>
                <a href="#" className="social__link">
                    <svg id="ei-sc-twitter-icon" viewBox="0 0 50 50">
                        <path
                            d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Footer;