import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {ToggleIsMobile} from "./AC";
import Footer from "./compopnents/footer";
import Header from "./compopnents/header";
import Slider from "./compopnents/slider";
import FindYourFit from "./compopnents/find-your-fit";
import OurStore from "./compopnents/our-store";

import './App.scss';

function App({ToggleIsMobile}) {

useEffect(() => {
  if (window.outerWidth <= 770)
    ToggleIsMobile(true); else {
    ToggleIsMobile(false)
  }

  let mql = window.matchMedia('(max-width: 770px)');

  function screenTest(e) {
    ToggleIsMobile(e.matches)
  }

  mql.addListener(screenTest);
  return () => mql.removeListener(screenTest)
}, []);

  return (
    <div>
      <Header/>
      <Slider />
      <FindYourFit/>
      <OurStore/>
      <Footer/>
    </div>
  );
}

export default connect(null, {ToggleIsMobile})(App);
