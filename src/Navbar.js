import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isOpen ? "active" : ""}`}>
      <div className="logo">R I S E - J N V</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#venue" onClick={() => setIsOpen(false)}>
              Venue
            </a>
          </li>
          <li>
            <a href="#speakers" onClick={() => setIsOpen(false)}>
             Team
            </a>
          </li>
          <li>
            <a href="#schedule" onClick={() => setIsOpen(false)}>
              Schedule
            </a>
          </li>
          <li>
            <a href="#connect" onClick={() => setIsOpen(false)}>
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
