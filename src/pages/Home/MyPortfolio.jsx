import React from 'react';

const MyPortfolio = () => {
  return (
    <section id="portfolio">
      <span className="section-sub-heading">Recent projects</span><br />
      <span className="section-heading">Portfolio</span>
      <div className="portfolio-container">

        <div className="portfolio-card">
          <div className="portfolio-img-container">
            <img src="../img/project1.png" className="portfolio-img" alt="Portfolio Website" />
          </div>
          <div className="portfolio-description">
            <div className="portfolio-heading">Portfolio Website</div>
            <div className="portfolio-tech-stack">
              <strong>Technologies:</strong> React.js, Jenkins, CI/CD, VPS Server
            </div>
            <div className="portfolio-details">
              <ul>
                <li>Developed a personal portfolio website using React.js for showcasing projects and skills.</li>
                <li>Implemented a CI/CD pipeline on a VPS server with Jenkins for automated build and deployment.</li>
              </ul>
            </div>
            <div>
              <a className="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/adascoding/Portfolio">Open in GitHub</a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-img-container">
            <img src="../img/project2.png" className="portfolio-img" alt="Movie App" />
          </div>
          <div className="portfolio-description">
            <div className="portfolio-heading">Movie App</div>
            <div className="portfolio-tech-stack">
              <strong>Technologies:</strong> React.js, React Router, Tailwind CSS, .NET Core, Entity Framework, JWT
            </div>
            <div className="portfolio-details">
              <ul>
                <li>Created a dynamic web application for exploring movies using React.js and React Router.</li>
                <li>Backend powered by .NET Core and Entity Framework for data management.</li>
                <li>Implemented JWT authentication for secure user login and data protection.</li>
              </ul>
            </div>
            <div>
              <a className="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/adascoding/MovieApp">Open in GitHub</a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-img-container">
            <img src="../img/project3.png" className="portfolio-img" alt="Clothing eCommerce Store" />
          </div>
          <div className="portfolio-description">
            <div className="portfolio-heading">Clothing eCommerce Store</div>
            <div className="portfolio-tech-stack">
              <strong>Technologies:</strong> React.js, Strapi, MySQL, styled-components, MaterialUI
            </div>
            <div className="portfolio-details">
              <ul>
                <li>Developing an e-commerce platform for a clothing store using React.js and MaterialUI.</li>
                <li>Utilizing Strapi as a headless CMS and MySQL for managing product and user data.</li>
                <li>Implementing styled-components for flexible and styled UI components.</li>
              </ul>
            </div>
            <div>
              <a className="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/adascoding/ClothingStore">Open in GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MyPortfolio;
