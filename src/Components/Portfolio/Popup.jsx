import React from 'react';
import "./Popup.scss";

import { FaWordpress, FaAngular, FaReact, FaDev } from "react-icons/fa";


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
          } else {
            return null;
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
