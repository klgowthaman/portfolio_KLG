import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiCloud, FiTool } from 'react-icons/fi';

const skills = [
  { icon: <FiCode />, title: 'Programming', tags: ['Python', 'JavaScript'] },
  { icon: <FiLayout />, title: 'Frontend', tags: ['React.js', 'HTML', 'CSS'] },
  { icon: <FiCloud />, title: 'Cloud & Backend', tags: ['AWS EC2', 'S3', 'Lambda'] },
  { icon: <FiTool />, title: 'Tools & Design', tags: ['Eagle', 'Canva', 'Picsart'] },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I Work With</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className={`skill-card fade-up stagger-${i + 1}${inView ? ' visible' : ''}`} key={i}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
