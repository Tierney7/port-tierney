import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaInstagram, } from "react-icons/fa";


const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
            <div>
                <p>Kansas City, Missouri</p>
                <p>United States</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
            (816) 914-0503</h4>
            </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>tierneycode@gmail.com</h4>
        </div>
        </div>

        <div className="right">
            <h4>Matt Tierney</h4>
            <p>Full-Stack Web Developer, and University of Kansas Bootcamp graduate based in Kansas City, Missouri.</p>
            <div className="social">
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer