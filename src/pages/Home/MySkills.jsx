import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faTools, faCode } from '@fortawesome/free-solid-svg-icons'; // Import icons you need

export default function MySkills() {
    return (
        <section id="skills">
            <h2 className="skills-heading">My Skills</h2>
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
