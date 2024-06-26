import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faTools, faCode } from '@fortawesome/free-solid-svg-icons'; // Import icons you need

export default function MySkills() {
    return (
        <section id="skills">
            <span className="section-sub-heading">Technological Expertise and Tools</span><br />
            <span className="section-heading">My Skills</span>
            <div className="skills-container">
                <div className="skills-card">
                    <div className="skills-title">
                        <FontAwesomeIcon icon={faDesktop} className="icon" /> Front-End
                    </div>
                    <div className="skills-description">
                        <ul>
                            <li><strong>React.js:</strong> Developed dynamic and responsive user interfaces for web applications.</li>
                            <li><strong>React Router:</strong> Implemented seamless navigation between pages in React applications.</li>
                            <li><strong>Tailwind CSS, styled-components, MaterialUI:</strong> Utilized modern CSS frameworks and libraries for styling and UI design.</li>
                            <li><strong>Modern CSS (Flexbox & Grid):</strong> Applied Flexbox and Grid layout techniques to create responsive and adaptable layouts.</li>
                        </ul>
                    </div>

                </div>
                <div className="skills-card">
                    <div className="skills-title">
                        <FontAwesomeIcon icon={faCode} className="icon" /> Back-End
                    </div>
                    <div className="skills-description">
                        <ul>
                            <li><strong>C# (.NET Core):</strong> Built robust back-end services for web applications.</li>
                            <li><strong>Entity Framework Core:</strong> Managed database operations efficiently in .NET Core applications.</li>
                            <li><strong>JWT Authentication:</strong> Implemented secure user authentication for applications.</li>
                            <li><strong>Repository Pattern:</strong> Applied the Repository Pattern to create an abstraction layer for data access, improving code maintainability and testability.</li>
                            <li><strong>Test-Driven Development (TDD):</strong> Practiced TDD to ensure code reliability and maintainability through rigorous automated testing.</li>
                        </ul>
                    </div>

                </div>
                <div className="skills-card">
                    <div className="skills-title">
                        <FontAwesomeIcon icon={faTools} className="icon" /> DevOps & Deployment
                    </div>
                    <div className="skills-description">
                        <ul>
                            <li><strong>Jenkins:</strong> Implemented CI/CD pipelines for automated build, test, and deployment processes.</li>
                            <li><strong>VPS Server:</strong> Configured and managed Virtual Private Servers for hosting applications and enabling CI/CD.</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-card">
                    <div className="skills-title">
                        <FontAwesomeIcon icon={faServer} className="icon" /> Other Skills
                    </div>
                    <div className="skills-description">
                        <ul>
                            <li><strong>Git:</strong> Managed source code using Git for version control and collaboration.</li>
                            <li><strong>Agile Scrum:</strong> Practiced Agile methodologies in team environments for iterative development.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
