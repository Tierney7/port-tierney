import "./WorkCardStyles.css";

import React from 'react';


const WorkCard = ({allData}) => {
    return ( 
        
allData.map((data) =>{
    return(
        
        <div className="project-container"> 

    <div className="project-card">
           <img src={data.imgsrc} alt="pic" />
            <h2 className="project-title">{data.title}</h2>
            <div className="pro-details">
                <p>{data.text}</p>
                <div className="pro-btns">
                    <a href={data.view} className="btn">View</a>
                    <a href={data.source} className="btn">Source</a>
                </div>
            </div>
        </div>
        </div>
        
    )
   })

  )
    }

export default WorkCard;
