import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';
import { FiCpu, FiFileText, FiGlobe, FiPlay, FiShield, FiCloud, FiMap } from 'react-icons/fi';

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
    title: 'Traveling Agent Web Application',
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
    title: 'AI-Based Automatic Form Filling System',
    description: 'Extracts structured data from ID cards and documents using AI, then automatically fills digital forms — eliminating manual entry and boosting efficiency.',
    tech: ['Python', 'AI/ML', 'OCR', 'Automation'],
  },
  {
    icon: <FiPlay />,
    title: 'Game-Based Learning Platform',
    description: 'An interactive educational platform that uses game mechanics to make learning engaging and effective for students.',
    tech: ['JavaScript', 'Game Design', 'React'],
  },
  {
    icon: <FiShield />,
    title: 'Smart Fire Extinguisher System',
    description: 'An automated fire detection and suppression system designed for trains, using sensor data to trigger real-time safety responses.',
    tech: ['IoT', 'Sensors', 'Arduino', 'Embedded'],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

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
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className={`project-card fade-up${inView ? ' visible' : ''}`}
              style={{ 
                transitionDelay: `${i * 0.12}s`,
                cursor: project.github ? 'pointer' : 'default'
              }}
              key={i}
              onClick={() => project.github && window.open(project.github, '_blank', 'noopener,noreferrer')}
            >
              <div className="project-icon-wrapper">
                <span className="project-icon">{project.icon}</span>
              </div>
              <div className="project-body">
                <span className="project-number">Project 0{i + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {project.github && (
                    <span className="project-link" style={{ zIndex: 2, position: 'relative' }}>
                      View Code
                    </span>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="project-link" 
                      target="_blank" 
                      rel="noreferrer"
                      style={{ zIndex: 2, position: 'relative' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
