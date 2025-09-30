import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <div className="about" id="about">
  <div className="about-us">
    <div className="about-text">
      <h1>
        <span className="color">ABOUT</span>US
      </h1>
      <p>
        We are certified by world-class organizations. We have branches
        internationally and are widely known as foodies. We have 5-star
        certificates awarded globally and 5-star chefs as well.
      </p>
      <a href="/" style={{ "--i": 6 }}>
        <i className="bx bxl-facebook-circle" style={{ color: "blue" }}></i>
      </a>
      <a href="/" style={{ "--i": 7 }}>
        <i className="bx bxl-instagram" style={{ color: "#E4405F" }}></i>
      </a>
      <a href="/" style={{ "--i": 8 }}>
        <i className="bx bxl-twitter" style={{ color: "blue" }}></i>
      </a>
      <a href="/" style={{ "--i": 9 }}>
        <i className="bx bxl-pinterest" style={{ color: "red" }}></i>
      </a>
      <a href="/" style={{ "--i": 10 }}>
        <i className="bx bxl-youtube" style={{ color: "red" }}></i>
      </a>
    </div>
    <div className="about-img">
      
      <img src= './images/cer.webp' alt="Our certifications" />
    </div>
  </div>

    </div>
  )
}
