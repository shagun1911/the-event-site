// eslint-disable-next-line jsx-a11y/iframe-has-title
import React, { useState } from "react";
import "./App.css";
import Schedule from "./Schedule";
import Navbar from "./Navbar";

function App() {
  const [activeDay, setActiveDay] = useState(null);

  const toggleSessions = (day) => {
    if (activeDay !== day) {
      setActiveDay(day);
    }
  };
  return (
    <div className="container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Redefining Innovative Strategies in Education :</h1>
          <h1> A Journey Towards Saksham Bharat</h1>
          <p>
            <span className="highlighted-date">09-20 December, 2024</span>
            <p>
              Motilal Nehru National Institute of Technology, Allahabad, U.P.
            </p>
          </p>
          <a
            href="https://drive.google.com/file/d/1pGvjs-Hjv0uRKh5KggJCmWNH92B4x2HY/view?usp=sharing "
            className="cta-button"
          >
            Download App
          </a>
        </div>
      </section>

      {/* About the Event */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About The R.I.S.E. Program </h2>
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

      {/* Venue Section */}
      <section id="venue" className="venue">
        <h2>Venue: MNNIT Allahabad</h2>

        {/* Venue Images Section */}
        <div className="venue-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4xIJrhPdUfd8vlYgzfKjG68uRhGDRk1_Eg&s"
            alt="MNNIT Venue"
            className="venue-image"
          />
          <img
            src="https://www.mnnit.ac.in/dic2020/aboutus.png"
            alt="Venue View"
            className="venue-image"
          />
          <img
            src="https://www.mnnit.ac.in/swo/images/institute/6.jpg"
            alt="Venue View"
            className="venue-image"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lecture_Hall_Complex_MNNIT.jpg/220px-Lecture_Hall_Complex_MNNIT.jpg"
            alt="Lecture Hall"
            className="venue-image"
          />
        </div>

        {/* Map Section */}
      </section>
      <Schedule />

      {/* Speakers Section */}
      <section id="speakers">
        <h2>Experts</h2>
        <div className="speakers-container">
          <div className="speaker">
            <img src="" alt="Lead-cordinator 1" />
            <div className="speaker-info">
              <h3>Dr. Shivesh Sharma</h3>
              <p>
                <span className="bold">Designation:</span> Professor, Department
                of Biotechnology, MNNIT Allahabad
              </p>
              <p>
                <span className="bold">Email:</span> shiveshs@mnnit.ac.in
              </p>
              {/* <p>
                <span className="bold">Mobile No:</span> 9005688273
              </p> */}
              {/* <p>
                <span className="bold">Address:</span> Department of
                Biotechnology, Motilal Nehru National Institute of Technology
                Allahabad, Prayagraj – 211004, India
              </p> */}
            </div>
          </div>
          <div className="speaker">
            <img src="speaker2.jpg" alt="co-investigator" />
            <div className="speaker-info">
              <h3>Dr. Sameer Srivastava</h3>
              <p>
                <span className="bold">Designation:</span> Assistant Professor,
                Department of Biotechnology, MNNIT Allahabad
              </p>
              <p>
                <span className="bold">Email:</span> sameers@mnnit.ac.in
              </p>
              {/* <p>
                <span className="bold">Mobile No:</span> 9889864633
              </p> */}
            </div>
          </div>
          <div className="speaker">
            <img src="speaker3.jpg" alt="Lead-cordinator 2" />
            <div className="speaker-info">
              <h3>Mr. Himanshu Chaurasia</h3>
              <p>
                <span className="bold">Designation:</span> CEO, Cograd
              </p>
              <p>
                <span className="bold">Email:</span> himanshu@cograd.in
              </p>
              {/* <p>
                <span className="bold">Mobile No:</span> 9580370547
              </p> */}
              {/* <p>
                <span className="bold">Address:</span> Cograd Tech Village,
                Noida
              </p> */}
            </div>
          </div>
          <div className="speaker">
            <img src="speaker4.jpg" alt="co-investigator" />
            <div className="speaker-info">
              <h3>Mr. Saurabh Yadav</h3>
              <p>
                <span className="bold">Designation:</span> COO, Cograd
              </p>
              <p>
                <span className="bold">Email:</span> saurabh@cograd.in
              </p>
              {/* <p>
                <span className="bold">Mobile No:</span> 8077981379
              </p> */}
              {/* <p>
                <span className="bold">Address:</span> Cograd Tech Village,
                Noida
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="location">
        <div className="map-container">
          <h3>Location</h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31780.785464529556!2d81.84837667611749!3d25.43584174427693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39818042f8e283f9%3A0xf3be4a7d9fd1d9c9!2sMotilal%20Nehru%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1638497648691!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      <section id="connect">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <h2 className="footer-title">Stay Connected</h2>
              <p className="footer-description">
                Get the latest updates and notifications about our upcoming
                events and training sessions.
              </p>
              <form className="footer-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                  required
                />
                <button type="submit" className="footer-button">
                  Notify Me
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Cograd. All Rights Reserved.</p>
          </div>
        </footer>
      </section>
    </div>
  );
}
export default App;
