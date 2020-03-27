import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
import {Carousel} from 'react-responsive-carousel';

import slide_1 from './img/slide-1.png'
import slide_2 from './img/slide-2.png'
import slide_3 from './img/slide-3.png'

import './carousel.css';

import './styles.scss'

const Slider = () => {
  return (
    <section className="slide">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        statusFormatter={() => null}
      >
        <div className="slide__1 slide__wrapper">
          <div className="slide__1-text">
            <span>yeezy 350 v2</span>
          </div>
          <a href="#" className="slide__1-button slide-button">
            <div>shop now</div>
          </a>
          <div className="slide__1-img">
            <img src={slide_1} alt=""/>
          </div>
        </div>
        <div className="slide__2 slide__wrapper">
          <div className="slide__2-text">
            <span> jordans for <br/>every occasion</span>
          </div>
          <a href="#" className="slide__2-button slide-button">
            <div>shop now</div>
          </a>
          <div className="slide__2-img">
            <img src={slide_2} alt=""/>
          </div>
        </div>
        <div className="slide__3 slide__wrapper">
          <div className="slide__3-text">
            <span>accessories & <br/>collectibles</span>
          </div>
            <a href="#" className="slide__3-button slide-button">
              <div>shop now</div>
            </a>
          <div className="slide__3-img">
            <img src={slide_3} alt=""/>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
