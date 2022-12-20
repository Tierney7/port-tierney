import "./WorkCardStyles.css";

import React from 'react';
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
           <div className="project-card">
            <img src={pro1} alt="pro1" />
            <h2 className="project-title">Weather Dashboard</h2>
            <div className="pro-details">
                <p>text here</p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    
  )
}

export default WorkCard
