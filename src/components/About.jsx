import React from 'react'
import profilep from "../assets/images/IMG_3068.jpg"
import "./About.css"
import 'boxicons'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className="home" id="home">
        <div className="home-content">
            <h1>Hi, It's <span>Sarvesh</span></h1>
                <h3 className="text-animation">I'am a <span></span></h3>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/sarvesh-patil-sp6020"><box-icon type='logo' name='linkedin'></box-icon></a>
                    <a href="https://github.com/SarveshPatil6020"><box-icon type='logo' name='github'></box-icon></a>
                    <a href="https://www.instagram.com/sarvesh_patil__?igsh=cjY1YXQ1eGd6Zjl0&utm_source=qr"><box-icon type='logo' name='instagram-alt'></box-icon></a>
                </div>
                <div className="btn-group">
                    <a href="https://drive.google.com/file/d/1XccEDtVvumx_P_w4ZKYdr-uh3N_r00dX/view?usp=sharing" class="btn">Download CV</a>
                    <a href="abt" className="btn">Read more</a>
                </div>            
        </div>
            <div className="home-img">
                <img src={profilep} alt=""></img>
            </div>

    </section>
  )
}

export default About