// components/Introduction.js
import React from 'react';
import './Introduction.css';
import pimage from '../assests/profile.jpg'

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="profile-image">
        <img src={pimage} alt="Poorvi Agarwal" />
      </div>
      <div className="skills">
        <h2>Programming Skills</h2>
        <div className="skills-container">
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">CSS</div>
          <div className="skill">HTML</div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
