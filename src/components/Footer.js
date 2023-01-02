import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaInstagram, FaBookOpen, } from "react-icons/fa";


const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{ color: "rgba(134, 98, 1)", marginRight: "2rem" }}/>
            <div>
                <p>Kansas City, Missouri</p>
                <p>United States</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{ color: "rgba(134, 98, 1)", marginRight: "2rem" }}/>
            (816) 914-0503</h4>
            </div>
        <div className="email">
          <a href="mailto:tierneycode@gmail.com">
            <h4><FaMailBulk size={20} style={{ color: "rgba(134, 98, 1)", marginRight: "2rem" }}/>tierneycode@gmail.com</h4>
        </a>
        </div>
        <div className="resume">
          <a href="https://docs.google.com/document/d/1EQIT-5I_wqwy8EERw-OWgSn1mOfJyc2RZ--1mjKnqv0/edit?usp=sharing">
            <h4><FaBookOpen size={20} style={{ color: "rgba(134, 98, 1)", marginRight: "2rem" }}/>View Resume</h4>
        </a>
        </div>
        </div>
        


        <div className="right">
            <h4>Matt Tierney</h4>
            <p>Full-Stack Web Developer, and University of Kansas Bootcamp graduate based in Kansas City, Missouri.</p>
            <div className="social">
            <a href="https://github.com/Tierney7">  
            <FaGithub size={30} style={{ color: "rgba(134, 98, 1)", marginRight: "1rem" }}/>
            </a>
            <a href="https://www.linkedin.com/in/tierneycode/">
            <FaLinkedin size={30} style={{ color: "rgba(134, 98, 1)", marginRight: "1rem" }}/>
            </a>
            <a href="https://www.instagram.com/tierneyssmokedgoods/">
            <FaInstagram size={30} style={{ color: "rgba(134, 98, 1)", marginRight: "1rem" }}/>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
