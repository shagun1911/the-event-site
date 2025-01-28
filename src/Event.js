import React from "react";
import "./Event.css"; 

const AboutEventSection = () => {
  return (
    <>
      {/* About the Event */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About The R.I.S.E. Program</h2>
          <p>
            The training program aims to equip 780 teachers from Uttarakhand
            with skills in AI, coding and awareness of other emerging
            technologies, following NCF 2023 guidelines. The training includes
            separate modules for junior (6th-8th) and senior (9th-12th) teachers
            covering topics like Python, AI, and Machine Learning. The duration
            of the program is 10-days(5 days on campus & 5 days online) with
            theory, practical and project sessions for five batches to be held
            at IIT Delhi’s Sonipat Campus or similar. Participants will receive
            certification from IHFC-TIH, IIT Delhi signifying their expertise in
            integrating these technologies into education.
          </p>
        </div>
      </section>

      {/* Event Info */}
      <section className="event-info">
        <div className="info-box">
          <h3>Where</h3>
          <p>IIT Delhi, Sonipat Campus</p>
        </div>
        <div className="info-box">
          <h3>When</h3>
          <p>31st January-28th February, 2025</p>
        </div>
      </section>
    </>
  );
};

export default AboutEventSection;
