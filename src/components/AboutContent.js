import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.jpeg"

const AboutContent = () => {
           return (
           <div className="about">
            <div className="left">
                <h1>About Me</h1>
                <p>Full-Stack web developer leveraging Art and Management background to build a new, creative, and more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Kansas, with newly developed skills in HTML, JavaScript, CSS, React.js, and responsive web design to name a few. Along with my studies though the university I have also earned several certificates of completion with CodeAcademy. This allowed me to sharpen my skills as well as learn languages not offered in my bootcamp, including Ruby, and Python. Always known as a leader and driven problem solver. Passionate about developing functional and cosmetically pleasing apps, with a focus on mobile design and development. With each project, my goal is to grab my audience's attention with stunning design for a unique user experience. I have applied aspects of several languages for my personal projects, both front and back-end. Most recently utilizing React, and Javascript in a portfolio project. I’ve worked on 3 separate group projects. Building everything from a local restaurant review website utilizing API’s, a recipe generator using Handlebars, and a social network designed to help coding students, and professionals collaborate on projects, issues and most importantly stay in touch. I am excited to use these skills, along with my professional background as part of a creative, quality-driven team to build functional, and more unique experiences for internet users. </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                        </div>
                        <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
           </div>
           );
    };

export default AboutContent;