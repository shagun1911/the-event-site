import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <section id="feedback" className="feedback">
      <h2>Feedback</h2>
      <div className="feedback-container">
        <div className="feedback-button">
          <a
            href="https://forms.gle/F4RVesLSdWLo3Sra8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Pre Feedback
          </a>
        </div>
        <div className="feedback-button">
          <a
            href="https://forms.gle/nfn5dJBXc2uMvdfv9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Daily Feedback
          </a>
        </div>
        <div className="feedback-button">
          <a
            href="https://forms.gle/29bjdqU2C5Jdb5ZcA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Post Feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
