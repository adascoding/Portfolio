import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-icons">
                <a href="https://www.facebook.com/AdasAlvikas" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com/in/adas-alvikas/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/adascoding" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="footer-content">
                <p className="footer-text">
                    &copy; Adas {new Date().getFullYear()} |{" "}
                    <a href="../Adas-CV.pdf" className='footer-download' download>Download CV</a>
                </p>
            </div>
        </div>
    );
}
