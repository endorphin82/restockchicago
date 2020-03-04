import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import slide_1 from './img/slide-1.png'
import slide_2 from './img/slide-2.png'
import slide_3 from './img/slide-3.png'

import 'react-awesome-slider/dist/styles.css';
import './styles.scss'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <section className="slide">
      <AutoplaySlider
        organicArrows={false}
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div className="slide__1">
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
        <div className="slide__2">
          <div className="slide__2-text">
            <span> jordans for <br/>every occasion</span>
            <a href="#" className="slide__2-button slide-button">
              <div>shop now</div>
            </a>
          </div>
          <div className="slide__2-img">
            <img src={slide_2} alt=""/>
          </div>
         </div>
        <div className="slide__3">
          <div className="slide__3-text">
            <span>accessories & <br/>collectibles</span>
            <a href="#" className="slide__3-button slide-button">
              <div>shop now</div>
            </a>
          </div>
          <div className="slide__3-img">
            <img src={slide_3} alt=""/>
          </div>
          </div>
      </AutoplaySlider>
    </section>
  );
};

export default Slider;
