export default function HeroSection() {
    return(
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I'm Adas</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Junior Software
                        </span>{ " "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero-section-description">
                    Recent graduate in Software Systems from Kauno kolegija, Lithuania,
                    with hands-on experience in Agile Scrum methodologies gained
                    during a junior .NET Developer internship.
                        <br/>
                        Eager to apply skills in C#, React.js, .NET Core, and SQL Server
                        to contribute effectively as a Junior Developer.
                        Passionate about continuous learning and growth in
                        software development, seeking opportunities to leverage
                        technical expertise in a collaborative team environment.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero-section-img">
                <img className="hero-image" src="./img/hero_img.jpg" alt="Hero Section"/>
            </div>
        </section>
    );
}