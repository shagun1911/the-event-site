import React from "react";
import "./Speakers.css";

const speakersData = [
  {
    id: 1,
    name: "Dr. Shivesh Sharma (Coordinator)",
    designation: "Professor, Department of Biotechnology, MNNIT Allahabad",
    email: "shiveshs@mnnit.ac.in",
    image: "speaker1.jpg",
  },
  {
    id: 2,
    name: "Dr. Sameer Srivastava (Co-Coordinator)",
    designation:
      "Assistant Professor, Department of Biotechnology, MNNIT Allahabad",
    email: "sameers@mnnit.ac.in",
    image: "speaker2.jpg",
  },
  {
    id: 3,
    name: "Mr. Himanshu Chaurasia",
    designation: "CEO, Cograd",
    email: "himanshu@cograd.in",
    image: "speaker3.jpg",
  },
  {
    id: 4,
    name: "Mr. Saurabh Yadav",
    designation: "COO, Cograd",
    email: "saurabh@cograd.in",
    image: "speaker4.jpg",
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="speakers">
      <h2>Organizing Team</h2>
      <div className="speakers-container">
        {speakersData.map((speaker) => (
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
