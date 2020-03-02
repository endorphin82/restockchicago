import React from 'react';
import {Provider} from "react-redux";
import './App.scss';
import Footer from "./compopnents/footer";
import Header from "./compopnents/header";
import Slider from "./compopnents/slider";
import FindYourFit from "./compopnents/find-your-fit";
import OurStore from "./compopnents/our-store";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Slider/>
        <FindYourFit/>
        <OurStore/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
