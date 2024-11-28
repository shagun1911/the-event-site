import React from "react";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">R.I.S.E.</div>
        <nav>
          <ul className="nav-links">
            <li>
              <button className="buy-tickets">Register</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Redefining Innovative Strategies in Education :  A Journey Towards
            Saksham Bharat
          </h1>
          <p>
            10-12 December, Motilal Nehru National Institute of Technology
            Allahabad
            <p>
              Prayagraj – 211004, India www.mnnit.ac.in [An Institute of
              National Importance]
            </p>
          </p>
          <a href="#buy-tickets" className="cta-button">
            Register
          </a>
        </div>
      </section>

      {/* About the Event */}
      <section className="about">
        <div className="about-content">
          <h2>About The R.I.S.E. Program </h2>
          <p>
            The proposed project is a transformative initiative
            designed to empower educators by redefining and implementing
            innovative strategies in education. This program aims to foster a
            culture of continuous learning and growth among teachers, equipping
            them with the latest pedagogical tools, technologies, and
            methodologies. Through a blend of interactive workshops,
            collaborative sessions, and hands-on training, educators will be
            inspired to rethink traditional teaching approaches and adopt
            creative, student-centered practices. The program is committed to
            enhancing the capacity of educators to nurture critical thinking,
            creativity, and resilience in students, preparing them for the
            challenges of the 21st century.
          </p>
        </div>
      </section>

      {/* Event Info */}
      <section className="event-info">
        <div className="info-box">
          <h3>Where</h3>
          <p>Executive Development Centre MMNIT</p>
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
        <div className="map-container">
          <h3>Location on Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31780.785464529556!2d81.84837667611749!3d25.43584174427693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39818042f8e283f9%3A0xf3be4a7d9fd1d9c9!2sMotilal%20Nehru%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1638497648691!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 R.I.S.E. Program | All rights reserved</p>
          <ul className="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
