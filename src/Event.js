import React from "react";
import "./Event.css"; // Import the CSS file for styling

const AboutEventSection = () => {
  return (
    <>
      {/* About the Event */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About The R.I.S.E. Program</h2>
          <p>
            The proposed project is a transformative initiative designed to
            empower educators by redefining and implementing innovative
            strategies in education. This program aims to foster a culture of
            continuous learning and growth among teachers, equipping them with
            the latest pedagogical tools, technologies, and methodologies.
            Through a blend of interactive workshops, collaborative sessions,
            and hands-on training, educators will be inspired to rethink
            traditional teaching approaches and adopt creative, student-centered
            practices. The program is committed to enhancing the capacity of
            educators to nurture critical thinking, creativity, and resilience
            in students, preparing them for the challenges of the 21st century.
          </p>
        </div>
      </section>

      {/* Event Info */}
      <section className="event-info">
        <div className="info-box">
          <h3>Where</h3>
          <p>Executive Development Centre, MNNIT Allahbad</p>
        </div>
        <div className="info-box">
          <h3>When</h3>
          <p>Monday to Friday, 09-20 December</p>
        </div>
      </section>
    </>
  );
};

export default AboutEventSection;
