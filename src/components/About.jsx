import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" id="about">
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>
        <div className="about-content">
          <p className={`about-text fade-up stagger-1${inView ? ' visible' : ''}`}>
            I'm an Electronics and Communication Engineering student with a deep passion 
            for software development, artificial intelligence, and cloud computing. I love 
            turning ideas into functional products — from AI-powered automation tools to 
            full-stack web applications. I'm always exploring new technologies and building 
            solutions that make a real-world impact.
          </p>
          <div className="about-stats">
            {[
              { num: '5+', label: 'Projects Built' },
              { num: '2', label: 'Internships' },
              { num: '4+', label: 'Events & Hackathons' },
            ].map((s, i) => (
              <div className={`stat-item fade-up stagger-${i + 2}${inView ? ' visible' : ''}`} key={i}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
