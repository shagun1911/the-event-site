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
          href="https://expo.dev/artifacts/eas/3AZEouTHzRmhQRB6G1xYDg.apk"
          className="cta-button"
        >
          Download App
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
