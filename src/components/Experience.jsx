import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: 'Game Development Intern',
    company: 'LetsGameTech',
    date: '2024',
    points: [
      'Developed interactive game prototypes using modern game engines',
      'Collaborated with a cross-functional team on game design and mechanics',
      'Gained hands-on experience in game development lifecycle',
    ],
  },
  {
    role: 'ServiceNow Online Internship',
    company: 'ServiceNow',
    date: '8 weeks',
    points: [
      'Completed structured online training on ServiceNow platform',
      'Learned IT service management (ITSM) workflows and automation',
      'Built hands-on projects demonstrating platform capabilities',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
        </div>
        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div className={`experience-card fade-up stagger-${i + 1}${inView ? ' visible' : ''}`} key={i}>
              <div className="experience-header">
                <div>
                  <div className="experience-role">{exp.role}</div>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-date">{exp.date}</div>
              </div>
              <ul className="experience-points">
                {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
