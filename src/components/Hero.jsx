import { FiArrowDown, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              Open to opportunities
            </div>
            <h1 className="hero-name">
              <span className="gradient-text">Gowthaman KL</span>
            </h1>
            <p className="hero-title">Aspiring Software Developer</p>
            <p className="hero-tagline">
              I build web and AI-based applications to solve real-world problems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <FiArrowDown /> View Projects
              </a>
              <a href="/resume.pdf" className="btn-secondary" download>
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
