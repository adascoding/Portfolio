import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleScroll = () => {
    // Detect which section is currently in view based on scroll position
    const scrollPosition = window.scrollY;
    const heroSection = document.getElementById("hero").offsetTop;
    const aboutSection = document.getElementById("about").offsetTop;
    const skillsSection = document.getElementById("skills").offsetTop;
    const portfolioSection = document.getElementById("portfolio").offsetTop;
    const contactSection = document.getElementById("contact").offsetTop;

    if (
      scrollPosition >= heroSection &&
      scrollPosition < aboutSection - 70
    ) {
      setActiveSection("hero");
    } else if (
      scrollPosition >= aboutSection - 70 &&
      scrollPosition < skillsSection - 70
    ) {
      setActiveSection("about");
    } else if (
      scrollPosition >= skillsSection - 70 &&
      scrollPosition < portfolioSection - 70
    ) {
      setActiveSection("skills");
    } else if (
      scrollPosition >= portfolioSection - 70 &&
      scrollPosition < contactSection - 70
    ) {
      setActiveSection("portfolio");
    } else if (scrollPosition >= contactSection - 70) {
      setActiveSection("contact");
    }
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

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
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
                onClick={closeMenu}
                to="hero"
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset as needed
                duration={500}
                activeClass="active-link"
                onSetActive={() => handleSetActive("hero")}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={closeMenu}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-link"
                onSetActive={() => handleSetActive("about")}
              >
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={closeMenu}
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-link"
                onSetActive={() => handleSetActive("skills")}
              >
                My Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={closeMenu}
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-link"
                onSetActive={() => handleSetActive("portfolio")}
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={closeMenu}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-link"
                onSetActive={() => handleSetActive("contact")}
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}