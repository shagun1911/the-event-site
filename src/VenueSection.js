import React from "react";
import "./VenueSection.css";

const VenueSection = () => {
  return (
    <section id="venue" className="venue">
      <h2>Venue: IIT Delhi, Sonipat Campus</h2>

     {/* Venue Images Section */}
<div className="venue-images">
  <img
    src="https://home.iitd.ac.in/public/storage/uploads/collage2_1659342985.jpg"
    alt="IIT Delhi Sonipat Campus - Collage"
    className="venue-image"
  />
  <img
    src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/01/full/1669913018-4205.jpg?im=FeatureCrop,size=(826,465)"
    alt="IIT Delhi Sonipat - Building"
    className="venue-image"
  />
  <img
    src="https://images.shiksha.com/mediadata/images/articles/1389074464phpPOODHu.jpeg"
    alt="IIT Delhi Sonipat - Campus Overview"
    className="venue-image"
  />
  <img
    src="https://files.yappe.in/place/full/iit-delhi-sonipat-campus-7168219.webp"
    alt="IIT Delhi Sonipat - Lecture Hall"
    className="venue-image"
  />
   <img
    src="https://infra.iitd.ac.in/static/media/sonipat9.64c93e13198a679b8c78.jpg"
    alt="IIT Delhi Sonipat - Research Facilities"
    className="venue-image"
  />
  <img
    src= "https://home.iitd.ac.in/public/storage/uploads/IMG-20230210-WA0008_1676030960.jpg"
    alt="IIT Delhi Sonipat - Classroom"
    className="venue-image"
  />
</div>

      <div className="venue-details">
        <p>
          IIT Delhi Sonipat Campus, an extension of the prestigious Indian
          Institute of Technology Delhi, stands as a beacon of innovation and
          academic excellence. Established to expand IIT Delhi's legacy, this
          state-of-the-art campus is strategically located in Sonipat, Haryana.
          It boasts cutting-edge research facilities, modern classrooms, and
          advanced laboratories designed to support interdisciplinary learning
          and innovation. The campus fosters an environment of collaboration,
          offering students and researchers opportunities to work on
          groundbreaking projects. With a focus on both academic and holistic
          development, the IIT Delhi Sonipat Campus is shaping future leaders
          and innovators in science, technology, and engineering.
        </p>
      </div>
    </section>
  );
};

export default VenueSection;
