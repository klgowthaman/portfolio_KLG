import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FiCpu, FiFileText, FiGlobe, FiPlay, FiCloud, FiMap } from 'react-icons/fi';

const projects = [
  {
    icon: <FiFileText />,
    title: 'PDF Summarizer',
    description: 'An intelligent tool that extracts content from PDF documents and generates concise summaries, significantly reducing manual reading effort.',
    tech: ['Python', 'NLP', 'React', 'Flask'],
    github: 'https://github.com/klgowthaman/summarizer',
  },
  {
    icon: <FiGlobe />,
    title: 'Traveling Agent Web App',
    description: 'A dynamic travel planning platform built with React, helping users discover destinations, plan itineraries, and book trips with an intuitive UI.',
    tech: ['React.js', 'JavaScript', 'CSS', 'API'],
    github: 'https://github.com/klgowthaman/web-for-travel-',
  },
  {
    icon: <FiMap />,
    title: 'AI-Based Urban Planning System',
    description: 'Built an intelligent urban planning system using the Google Gemini API. The application generates planning solutions based on user-input conditions, simulating real-world city planning and infrastructure decision-making. Focused on AI-driven automation and dynamic response generation.',
    tech: ['JavaScript', 'React', 'Google Gemini API', 'Prompt-based AI'],
    github: 'https://github.com/klgowthaman/urban-AI',
  },
  {
    icon: <FiCloud />,
    title: 'Weather Web Application',
    description: 'Developed a responsive weather forecasting web application using the OpenWeather API. The application allows users to search for any location and view real-time weather data including temperature, humidity, and weather conditions. Designed with a clean UI for smooth user experience and quick access to information.',
    tech: ['JavaScript', 'React', 'OpenWeather API', 'HTML', 'CSS'],
    github: 'https://github.com/klgowthaman/WeatherWise',
  },
  {
    icon: <FiCpu />,
    title: 'AI Form Filling System',
    description: 'Extracts structured data from ID cards and documents using AI, then automatically fills digital forms — eliminating manual entry and boosting efficiency.',
    tech: ['Python', 'AI/ML', 'OCR', 'Automation'],
  },
  {
    icon: <FiPlay />,
    title: 'Game-Based Learning Platform',
    description: 'An interactive educational platform that uses game mechanics to make learning engaging and effective for students.',
    tech: ['JavaScript', 'Game Design', 'React'],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const tickerItems = [
    ...projects.map((p, i) => ({ ...p, originalIndex: i })),
    ...projects.map((p, i) => ({ ...p, originalIndex: i }))
  ];

  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    let animationId;
    const track = trackRef.current;
    
    const scroll = () => {
      if (!isDragging.current && !isHovered.current && track) {
        track.scrollLeft += 0.8;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <section className="section" id="projects">
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            A selection of projects showcasing my skills in AI, web development, and embedded systems.
          </p>
        </div>

        <div className={`projects-showcase fade-up${inView ? ' visible' : ''}`}>
          {/* Main Dynamic Showcase Panel (Top Box) */}
          <div className="project-detail-card">
            {/* Visual Showcase Panel */}
            <div className="project-detail-visual" key={`visual-${activeIndex}`}>
              <div className="visual-grid-overlay"></div>
              <div className="visual-glow"></div>
              <div className="visual-x-mark"></div>
              <span className="visual-icon">{activeProject.icon}</span>
              <div className="visual-tech-summary">
                {activeProject.tech.map((t) => (
                  <span key={t} className="visual-badge">{t}</span>
                ))}
              </div>
            </div>

            {/* Description & Links Detail Panel */}
            <div className="project-detail-content" key={`content-${activeIndex}`}>
              <span className="project-number">Project 0{activeIndex + 1}</span>
              <h3>{activeProject.title}</h3>
              <p className="project-description-full">{activeProject.description}</p>
              
              <div className="project-detail-tech">
                {activeProject.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="project-action-links">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary project-action-btn"
                  >
                    <FiGithub size={16} /> View Code
                  </a>
                )}
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary project-action-btn"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Selector Row (Bottom Box) */}
      <div className={`proj-ticker-wrapper fade-up${inView ? ' visible' : ''}`} style={{ marginTop: '40px' }}>
        <div className="proj-ticker-fade proj-ticker-fade--left" />
        <div className="proj-ticker-fade proj-ticker-fade--right" />

        <div 
          className="proj-ticker-track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => { isHovered.current = false; handleMouseUpOrLeave(); }}
          onMouseUp={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => { isHovered.current = true; }}
          onTouchStart={() => { isHovered.current = true; }}
          onTouchEnd={() => { isHovered.current = false; }}
        >
          {tickerItems.map((project, i) => (
            <div
              className={`proj-ticker-card ${activeIndex === project.originalIndex ? 'active' : ''}`}
              key={i}
              onClick={() => setActiveIndex(project.originalIndex)}
              style={{ cursor: 'pointer' }}
            >
              <div className="proj-ticker-top">
                <span className="proj-ticker-icon">{project.icon}</span>
                <span className="proj-ticker-number">0{project.originalIndex + 1}</span>
              </div>
              <div className="proj-ticker-body">
                <h3>{project.title}</h3>
                <p>{project.description.slice(0, 65)}...</p>
              </div>
              <div className="proj-ticker-indicator"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
