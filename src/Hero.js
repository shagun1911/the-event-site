import React from "react";
import "./Hero.css"; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Redefining Innovative Strategies in Education :</h1>
        <h1>A Journey Towards Saksham Bharat</h1>
        <p>
          <span className="highlighted-date">09-20 December, 2024</span>
          <p>Motilal Nehru National Institute of Technology, Allahabad, U.P.</p>
        </p>
        <a
          href="https://drive.google.com/file/d/1pGvjs-Hjv0uRKh5KggJCmWNH92B4x2HY/view?usp=sharing"
          className="cta-button"
        >
          Download App
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
