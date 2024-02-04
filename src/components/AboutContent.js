import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.png"


const AboutContent = () => {
           return (
           <div className="about">
            <div className="left">
                
                <p>An innovative full-stack web developer and SEO specialist. Extensive background in various coding languages, developing web applications, and building/designing websites from the ground up. Specializing in WordPress, HubSpot, HTML, CSS, JS, React, PHP, WooCommerce, and Shopify. Google Analytics Certified, with real-world SEO experience. Professional strengths include creative problem-solving, communication, and time management. A proven leader, with a team-oriented mindset from 17 years of experience as a  hospitality manager.</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                        </div>
                                        </div>

            
            </div>
           </div>
           );
    };

export default AboutContent;