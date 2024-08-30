import React from 'react'
import "./Hero.css"
import profile from "../../assets/sahil_portfolio.jpg"

const Hero = () => {
  return (
    <div className="hero">
     <img src={profile} alt="" />
     <h1>I'm Sahil , Web Developer</h1>
     <p>I am a Frontend developer with a experience of 1 year</p>
     <div className="hero-action">
        <div className="hero-connect">

        </div>

        <div className="hero-resume">

        </div>
     </div>
    </div>
  )
}

export default Hero