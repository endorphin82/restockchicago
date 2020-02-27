import React from 'react';
import {Provider} from "react-redux";
import './App.scss';
import Footer from "./compopnents/footer";
import store from "./store";
import Header from "./compopnents/header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
