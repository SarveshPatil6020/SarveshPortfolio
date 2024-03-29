import React from 'react'
import "./Slider.css"
import back_g from '../assets/images/back_g.png'


const Slider = () => {
  return (
<div>
  
      <div className="container">
        <div>
      
          <h1>Home</h1>
          <div className="gallery">
            <img src={back_g} alt="Background" />
            <img src={back_g} alt="Background" />
            <img src={back_g} alt="Background" />
            <img src={back_g} alt="Background" />
            <img src={back_g} alt="Background" />
            <div className="text">
          <h2>click here</h2>
        </div>
          </div>
        </div>
       
      </div>
    </div>

  )
}

export default Slider;