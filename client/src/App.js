import React, { useEffect } from "react"
import { connect } from "react-redux"


import { ToggleIsMobile } from "./AC"
import Footer from "./compopnents/footer"
import Header from "./compopnents/header"
import Slider from "./compopnents/slider"
import FindYourFit from "./compopnents/find-your-fit"
import OurStore from "./compopnents/our-store"

import "./App.scss"

function App({ ToggleIsMobile }) {

  useEffect(() => {

    screenTest()

    window.addEventListener("resize", screenTest)

    function screenTest() {
      (window.innerWidth >= 770) ? ToggleIsMobile(false) : ToggleIsMobile(true)
    }

    return () => window.removeListener("resize", screenTest)
  })

  return (
    <div className="container">
      <Header/>
      <Slider/>
      <FindYourFit/>
      <OurStore/>
      <Footer/>
    </div>
  )
}

export default connect(null, { ToggleIsMobile })(App)
