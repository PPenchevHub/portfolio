import React from 'react';
//import './projectModal.scss';

function ProjectModal({ project, onClose }) {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <div className="project-info">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <div className="project-image">
          <img src={project.img} alt={project.title} />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
