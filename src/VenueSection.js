import React from "react";
import "./VenueSection.css";

const VenueSection = () => {
  return (
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

      {/* Details about MNNIT */}
      <div className="venue-details">
        <p>
          MNNIT Allahabad (Motilal Nehru National Institute of Technology) is
          one of the premier engineering institutions in India, known for its
          academic excellence, innovative research, and state-of-the-art
          infrastructure. Established in 1961, it is an Institute of National
          Importance, offering a wide range of undergraduate, postgraduate, and
          doctoral programs. The campus is located in Prayagraj, featuring
          modern classrooms, advanced laboratories, and well-equipped hostels.
          MNNIT also actively engages students in various technical, cultural,
          and sports activities, fostering holistic development and producing
          industry-ready graduates.
        </p>
      </div>
    </section>
  );
};

export default VenueSection;
