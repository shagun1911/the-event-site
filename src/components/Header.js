import React from 'react';
import heroBg from './images/hero-bg.jpg'; 

const Header = () => {
  return (
    <header className="bg-black bg-opacity-50 p-4 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
        <div className="text-xl font-bold">TheEvent</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-red-600">Home</a></li>
          <li><a href="#speakers" className="hover:text-red-600">Speakers</a></li>
          <li><a href="#schedule" className="hover:text-red-600">Schedule</a></li>
          <li><a href="#venue" className="hover:text-red-600">Venue</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
