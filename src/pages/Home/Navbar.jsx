import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(prev => !prev);
    };

    const closeMenu = () => {
        setNavActive(false);
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
                            <Link onClick={closeMenu} to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="/testimonials">Testimonials</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="/contact" className="contact-button">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
