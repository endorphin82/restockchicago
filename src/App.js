import React from 'react';
import {connect} from "react-redux";
import {ToggleIsMobile} from "./AC";
import Footer from "./compopnents/footer";
import Header from "./compopnents/header";
import Slider from "./compopnents/slider";
import FindYourFit from "./compopnents/find-your-fit";
import OurStore from "./compopnents/our-store";

import './App.scss';

function App({ToggleIsMobile}) {

  let mql = window.matchMedia('(max-width: 770px)');
  function screenTest(e) {
    ToggleIsMobile(e.matches)
  }

  mql.addListener(screenTest);

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <FindYourFit/>
      <OurStore/>
      <Footer/>
    </div>
  );
}

export default connect(null, {ToggleIsMobile})(App);
