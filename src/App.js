// eslint-disable-next-line jsx-a11y/iframe-has-title
import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeDay, setActiveDay] = useState(null);

  const toggleSessions = (day) => {
    if (activeDay !== day) {
      setActiveDay(day);
    }
  };
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
            Redefining Innovative Strategies in Education : A Journey Towards
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
          />
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers">
        <h2>Co-ordinators</h2>
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
              <p>
                <span className="bold">Mobile No:</span> 9005688273
              </p>
              <p>
                <span className="bold">Address:</span> Department of
                Biotechnology, Motilal Nehru National Institute of Technology
                Allahabad, Prayagraj – 211004, India
              </p>
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
              <p>
                <span className="bold">Mobile No:</span> 9889864633
              </p>
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
              <p>
                <span className="bold">Mobile No:</span> 9580370547
              </p>
              <p>
                <span className="bold">Address:</span> Cograd Tech Village,
                Noida
              </p>
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
              <p>
                <span className="bold">Mobile No:</span> 8077981379
              </p>
              <p>
                <span className="bold">Address:</span> Cograd Tech Village,
                Noida
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="schedule-container">
  <h2 className="schedule-heading">Training Schedule</h2>

  {/* Introductory Note for Batch Information */}
  <p className="schedule-note">
    The 5-day training program will be conducted in two batches:
  </p>
  <ul className="batch-info">
    <li><strong>Batch 1:</strong> 9th to 13th December</li>
    <li><strong>Batch 2:</strong> 16th to 20th December</li>
  </ul>

  {/* Header with buttons for each day */}
  <div className="schedule-header">
    <button
      onClick={() => toggleSessions("day1")}
      className={activeDay === "day1" ? "active" : ""}
    >
      Day 1
    </button>
    <button
      onClick={() => toggleSessions("day2")}
      className={activeDay === "day2" ? "active" : ""}
    >
      Day 2
    </button>
    <button
      onClick={() => toggleSessions("day3")}
      className={activeDay === "day3" ? "active" : ""}
    >
      Day 3
    </button>
    <button
      onClick={() => toggleSessions("day4")}
      className={activeDay === "day4" ? "active" : ""}
    >
      Day 4
    </button>
    <button
      onClick={() => toggleSessions("day5")}
      className={activeDay === "day5" ? "active" : ""}
    >
      Day 5
    </button>
  </div>

  {/* Content for the selected day */}
  <div className="schedule-content">
    {activeDay === "day1" && (
      <div className="sessions">
        <h3>Day 1: Inauguration and Orientation</h3>
        <p><strong>Session 1:</strong> Competency Frameworks Overview</p>
        <p>- Principles and Practices of Competency-Based Education</p>
        <p>- Understanding and Applying Competency-Based Frameworks</p>
        <p><strong>Session 2:</strong> Developing Curriculum & Assessments</p>
        <p>- Tools and Techniques for Curriculum Development</p>
        <p>- Designing Effective Curriculum and Assessments</p>
      </div>
    )}

    {activeDay === "day2" && (
      <div className="sessions">
        <h3>Day 2: Digital Pedagogy Innovations</h3>
        <p><strong>Session 3:</strong> Leveraging Technology for Effective Teaching</p>
        <p>- Digital Tools, Platforms, and AI-Based Learning Applications</p>
        <p><strong>Session 4:</strong> AI in the Classroom</p>
        <p>- Practical Applications of AI and Digital Tools</p>
        <p>- Hands-On Training with AI Tools</p>
        <p><strong>Session 5:</strong> Digital Classroom Management</p>
        <p>- Managing a Tech-Enhanced Classroom</p>
        <p>- Best Practices for Digital Engagement</p>
      </div>
    )}

    {activeDay === "day3" && (
      <div className="sessions">
        <h3>Day 3: Social-Emotional Learning (SEL)</h3>
        <p><strong>Session 6:</strong> Fostering Emotional and Social Competencies</p>
        <p>- Techniques for Building SEL Skills in Students</p>
        <p><strong>Session 7:</strong> Building Inclusive Classrooms</p>
        <p>- Strategies for Inclusive Education</p>
        <p>- Creating a Supportive and Inclusive Learning Environment</p>
        <p><strong>Session 8:</strong> Reflective Practices and Self-Assessment</p>
        <p>- Methods for Teacher Self-Assessment</p>
        <p>- Enhancing Teaching Effectiveness Through Reflection</p>
      </div>
    )}

    {activeDay === "day4" && (
      <div className="sessions">
        <h3>Day 4: Continuous Professional Development</h3>
        <p><strong>Session 9:</strong> Professional Growth Plans</p>
        <p>- Designing and Implementing Personalized Development Plans</p>
        <p><strong>Session 10:</strong> Innovative Teaching Strategies</p>
        <p>- New Pedagogical Approaches</p>
        <p>- Project-Based and Inquiry-Based Learning</p>
        <p><strong>Session 11:</strong> Experiential Learning Techniques</p>
        <p>- Hands-on Learning Approaches</p>
        <p>- Techniques for Experiential Learning</p>
      </div>
    )}

    {activeDay === "day5" && (
      <div className="sessions">
        <h3>Day 5: Collaborative Learning and Feedback</h3>
        <p><strong>Session 12:</strong> Team Activities and Peer Feedback</p>
        <p>- Enhancing Collaboration Skills Among Teachers</p>
        <p><strong>Closing Session:</strong> Review and Certification</p>
        <p>- Program Review and Feedback</p>
        <p>- Evaluation, Feedback, and Certification</p>
      </div>
    )}
  </div>
</div>


      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <h2 className="footer-title">Stay Connected</h2>
            <p className="footer-description">
              Get the latest updates and notifications about our upcoming events
              and training sessions.
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
          <p>© 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
