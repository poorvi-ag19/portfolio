// components/Project.js
import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className="project-container">
        
      <div className="project-card">
        <h3>Educational Qualification</h3>
        <p>Your degree details go here.</p>
      </div>
      <div className="project-card">
        <h3>College Qualification</h3>
        <p>Your college details go here.</p>
      </div>
      <div className="project-card">
        <h3>Projects</h3>
        <p>Details about your projects go here.</p>
      </div>
    </div>
  );
};

export default Project;
