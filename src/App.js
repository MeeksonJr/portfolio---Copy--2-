import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsGraph from './components/SkillsGraph';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import GitHubSection from './components/GitHubSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Timeline />
      <SkillsGraph />
      <Testimonials />
      <GitHubSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
