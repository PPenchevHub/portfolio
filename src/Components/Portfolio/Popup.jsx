import React from 'react';
import "./Popup.scss";

import { FaWordpress, FaReact,FaJava, FaCss3, FaSass, FaDatabase} from "react-icons/fa";
import {SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiElementor, SiJavascript} from 'react-icons/si';
import {SiHibernate} from 'react-icons/si';
import {BiLogoPostgresql} from 'react-icons/bi'



function Popup({ selectedItem, handleClosePopup }) {
  return (
   <div className={`popup${selectedItem ? ' show-popup' : ''}`}>

      <div className="popup-inner">
        <div className="popup-left">
          <img src={selectedItem.img} alt="" />
        </div>
        <div className="popup-right">
          <button className="close-btn" onClick={handleClosePopup}>X</button>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <div className="technologies">
        {selectedItem.technologies.map((technology) => {
          if (technology === "react") {
            return <FaReact key={technology} />;
          } else if (technology === "wordpress") {
            return <FaWordpress key={technology} />;
          } else if (technology === "elementor") {
            return <SiElementor key={technology} />;
          }else if (technology === "javascript") {
            return <SiJavascript key={technology} />;
          }  else if (technology === "Springboot") {
            return <SiSpringboot key={technology} />;
          }else if (technology === "Postgresql") {
            return <BiLogoPostgresql key={technology} />;
          }else if (technology === "JWT") {
            return <SiJsonwebtokens key={technology} />;
          }
          else if (technology === "Hibernate") {
            return <SiHibernate key={technology} />;
          }else if (technology === "JPA") {
            return <FaDatabase key={technology} />;
          } else if (technology === "Spring Security") {
            return <SiSpringsecurity key={technology} />;
          } else if (technology === "Java") {
            return <FaJava key={technology} />;
          } 
          else if (technology === "css") {
            return <FaCss3 key={technology} />;
          } else if (technology === "sass") {
            return <FaSass key={technology} />;
          } 
          else {
            return <p>{technology}</p>;
          }
        })}
      </div>
          {selectedItem.liveLink && <a href={selectedItem.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>}
          {selectedItem.githubLink && <a href={selectedItem.githubLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a>}
        </div>
      </div>
    </div>
  );
}

export default Popup;
