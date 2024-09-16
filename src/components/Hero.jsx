import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './../styled/HeroSection.css';
import cvFile from './../assets/Current resume - MD.pdf'; // Replace with the path to your CV
import profilePhoto from './../assets/Photo.jpg'; // Replace with the path to your photo

const HeroAbout = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 3000); // Duration of the Hero section display

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='about' className="hero-about">
      {!showAbout ? (
        <motion.div
          className="hero-section"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 10 }}
        >
          <h1>Welcome to My Portfolio</h1>
          <p>Discover my work and skills</p>
        </motion.div>
      ) : (
        <motion.div
          className="about-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePhoto} alt="Mo" className="about-image" />
          <div className="about-text">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>
            <p>
              Hi, My name is Mohamed L. Datt or Mo for short. I’m a passionate software developer specializing in front-end technologies. 
              I have a keen interest in creating user-friendly and visually appealing web applications.
              My journey in coding started with learning Unity and Python, and now I’m focused on 
              mastering React and connecting my projects to databases.
            </p>
            <a href={cvFile} download className="cv-download-button">
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroAbout;
