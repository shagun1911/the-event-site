import React, { useState } from "react";
import "./App.css";
import Schedule from "./Schedule";
import Navbar from "./Navbar";
import TrainingObjectives from "./TrainingObjectives";
import VenueSection from "./VenueSection";
import SpeakersSection from "./Speakers";
import HeroSection from "./Hero";
import AboutEventSection from "./Event";
import Feedback from "./Feedback";
// import PatronSection from "./Patron";
import DaySchedule from "./DaySchedule";


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
      <HeroSection />
      <AboutEventSection />
      
      <TrainingObjectives/>
      <VenueSection />
      <DaySchedule/>
      <Schedule />
      {/* <PatronSection /> */}
      <SpeakersSection />

      <section id="location">
        <div className="map-container">
          <h3>Location</h3>

          <div style={{ margin: "0 auto", maxWidth: "90%", padding: "20px 0" }}>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.8299932168147!2d77.0461384761183!3d28.99352293239614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00f027e9dc5%3A0xb441a9bd0191c967!2sIIT%20Delhi%20Sonipat%20Campus!5e0!3m2!1sen!2sin!4v1638497648691!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
/>


          </div>
        </div>
      </section>
      <Feedback />

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
