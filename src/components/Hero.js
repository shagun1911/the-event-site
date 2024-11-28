import React from 'react';

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/08/06/99/29/360_F_806992999_iPKIUddtSRbz3YjG0WQkHByq4Hsv3SSr.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4">THE ANNUAL MARKETING CONFERENCE</h1>
      <p className="text-xl mb-8">10-12 December, Downtown Conference Center, New York</p>
      <button className="bg-red-600 px-8 py-3 text-white text-lg rounded-full hover:bg-red-700">
        Buy Tickets
      </button>
    </section>
  );
};

export default Hero;
