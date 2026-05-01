import { useInView } from 'react-intersection-observer';

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" id="education">
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className={`education-card fade-up stagger-1${inView ? ' visible' : ''}`}>
          <div className="education-degree">B.E. Electronics and Communication Engineering</div>
          <div className="education-school">SNS College of Engineering, Coimbatore</div>
          <div className="education-meta">2023 – 2027 &nbsp;·&nbsp; CGPA: 7.14</div>
        </div>
      </div>
    </section>
  );
}
