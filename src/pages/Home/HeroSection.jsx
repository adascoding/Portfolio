export default function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
            
                <div className="hero-text">
                <p className="hero-greeting">Hey, I'm Adas</p>
                    <h1 className="hero-title">Junior Software <span style={{ color: '#282938' }}>Developer</span></h1>
                    <p className="hero-description">
                        Recent graduate in Software Systems from Kauno kolegija, Lithuania, with hands-on experience in Agile Scrum methodologies gained during a junior .NET Developer internship.
                    </p>
                    <p className="hero-description">
                        Eager to apply skills in C#, React.js, .NET Core, and SQL Server to contribute effectively as a Junior Developer. Passionate about continuous learning and growth in software development, seeking opportunities to leverage technical expertise in a collaborative team environment.
                    </p>
                    <button className="hero-button">Contact me</button>
                </div>
                <div className="hero-image">
                    <img src="./img/hero_img.jpg" alt="Adas" />
                </div>
            </div>
        </section>
    );
}