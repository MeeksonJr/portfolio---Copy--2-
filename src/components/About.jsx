import React from 'react';
import './../styled/About.css';

function About() {
  return (
    <div id='about' className="about-container">
      <img src="/path/to/your-photo.jpg" alt="Mo" className="about-image" />
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hi, I’m Mo. I’m a passionate software developer specializing in front-end technologies. 
          I have a keen interest in creating user-friendly and visually appealing web applications.
          My journey in coding started with learning Unity and Python, and now I’m focused on 
          mastering React and connecting my projects to databases.
        </p>
      </div>
    </div>
  );
}

export default About;
