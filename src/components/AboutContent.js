import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.png"


const AboutContent = () => {
           return (
           <div className="about">
            <div className="left">
                
                <p>Full-Stack web developer leveraging Art and Management background to build a new, creative, and more intuitive user experience on the web. I recently earned a certificate in full stack development from the University of Kansas. Developing my skills in HTML, JavaScript, CSS, React, and responsive web design to name a few. Along with my studies through the University I have also earned several certificates with Codecademy. This allowed me to sharpen my skills as well as learn languages not offered in my program, including Ruby, and Python. Self taught myself Shopify, and WordPress a couple years ago and went on to build pages for numerous local small businesses including my own catering company. Always known as a leader and driven problem solver. Passionate about developing functional and cosmetically pleasing apps, with a focus on mobile design and development. With each project my goal is to grab the audiences attention with stunning design for a unique user experience. I have applied aspects of several languages for my personal projects, both front front and back-end. Most recently building a WordPress site for a Utah based marketing company, as well as a local bar in Kansas City. In my free time I have been rebuilding a portfolio project utilizing react, and JavaScript. I’ve worked on 3 separate group projects. Building everything from a local restaurant review website utilizing API’s, a recipe generator using handlebars, and a social network designed to help coding students, and professionals collaborate on projects, issues, and most importantly stay in touch. I am excited to use these skills, along with my professional background as part of a creative, quality-driven team to build functional, and more unique experiences for internet users.</p>
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