import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <button
        className={`hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className="navbar-container">
        <div className={`navbar-items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleSetActive("hero")}
                className={activeSection === "hero" ? "active-link" : ""}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleSetActive("about")}
                className={activeSection === "about" ? "active-link" : ""}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleSetActive("skills")}
                className={activeSection === "skills" ? "active-link" : ""}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleSetActive("portfolio")}
                className={activeSection === "portfolio" ? "active-link" : ""}
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleSetActive("contact")}
                className={activeSection === "contact" ? "active-link" : ""}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
