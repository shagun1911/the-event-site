import React from "react";
import "./Speakers.css";

const patronssData = [
  {
    id: 1,
    name: "Dr. Shivesh Sharma",
    designation: "Director, MNNIT Allahabad",
    email: "shiveshs@mnnit.ac.in",
    image: "speaker1.jpg",
  }
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="speakers" style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <h2>Our Patron</h2>
      <div className="speakers-container">
        {patronssData.map((speaker) => (
          <div key={speaker.id} className="speaker">
            {/* <img src={speaker.image} alt={`Photo of ${speaker.name}`} /> */}
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p>
                <span className="bold">Designation:</span> {speaker.designation}
              </p>
              <p>
                <span className="bold">Email:</span> {speaker.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
