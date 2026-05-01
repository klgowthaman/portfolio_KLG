import { useInView } from 'react-intersection-observer';
import { FiAward, FiZap, FiMonitor, FiTrendingUp } from 'react-icons/fi';

const achievements = [
  { icon: <FiTrendingUp />, title: 'Tamil Nadu Startup Card', subtitle: 'State Government Initiative' },
  { icon: <FiZap />, title: 'Smart India Hackathon', subtitle: 'SIH National Level' },
  { icon: <FiMonitor />, title: 'KPR App Pitching Event', subtitle: 'App Innovation Pitch' },
  { icon: <FiAward />, title: 'Arthasathra Event', subtitle: 'SNS College of Engineering' },
];

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" id="achievements" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Achievements & Events</span>
          <h2 className="section-title">Milestones</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              className={`achievement-card fade-up${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              key={i}
            >
              <div className="achievement-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
