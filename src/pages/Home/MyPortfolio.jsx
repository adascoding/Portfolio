export default function MyPortfolio() {
    return (
        <section id="portfolio">
            <span className="section-sub-heading">Recent projects</span><br />
            <span className="section-heading">Portfolio</span>
            <div className="portfolio-container">
                <div className="portfolio-card">
                    <div className="portfolio-img-container">
                        <img src="../img/project1.png" className="porfolio-img" />
                    </div>
                    <div className="portfolio-description">
                        <div className="portfolio-heading">Porfolio website</div>
                        <div className="portfolio-tech-stack">Tech stack.</div>
                        <div><a className="github-button" target="_blank" href="https://github.com/adascoding/Portfolio">Open in Github</a></div>
                    </div>
                </div>

                <div className="portfolio-card">
                    <div className="portfolio-img-container">
                        <img src="../img/project2.png" className="porfolio-img" />
                    </div>
                    <div className="portfolio-description">
                        <div className="portfolio-heading">Movie App</div>
                        <div className="portfolio-tech-stack">Tech stack.</div>
                        <div><a className="github-button" target="_blank" href="https://github.com/adascoding/MovieApp">Open in Github</a></div>
                    </div>
                </div>

                <div className="portfolio-card">
                    <div className="portfolio-img-container">
                        <img src="../img/project3.png" className="porfolio-img" />
                    </div>
                    <div className="portfolio-description">
                        <div className="portfolio-heading">Clothing eCommerce Store</div>
                        <div className="portfolio-tech-stack">Tech stack.</div>
                        <div><a className="github-button" target="_blank" href="https://github.com/adascoding/ClothingStore">Open in Github</a></div>
                    </div>
                </div>
            </div>

        </section >
    );
}
