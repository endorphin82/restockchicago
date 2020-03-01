import React from 'react';
import {Provider} from "react-redux";
import './App.scss';
import Footer from "./compopnents/footer";
import Header from "./compopnents/header";
import Slider from "./compopnents/slider";
import FindYourFit from "./compopnents/find-your-fit";
import OurStore from "./compopnents/our-store";

import store from "./store";
import MenuItemJordan from "./compopnents/header/nav-bar/menu-items/menu-item-jordan";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>

        <MenuItemJordan/>

        <Slider/>
        <FindYourFit/>
        <OurStore/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
