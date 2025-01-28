import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Redefining Innovative Strategies in Education</h1>
        <h1 className="small-text">A Journey Towards Saksham Bharat</h1>
        <p>
          <span className="highlighted-date">31st January - 28th February, 2025</span>
          <br />
          IIT Delhi, Sonipat Campus
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
