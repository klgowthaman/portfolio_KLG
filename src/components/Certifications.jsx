import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    description: 'Covers basic AI concepts and Azure AI services',
    link: 'https://www.credly.com/badges/0ff80fc4-7372-4264-99f9-0611c08d8c20/linked_in_profile',
  },
  {
    title: 'Snowflake – SnowPro Associate',
    description: 'Focused on cloud data platform and data warehousing',
    link: 'https://achieve.snowflake.com/2fe99bc3-302b-4ae7-ac6a-7e4551b6ac0a#acc.iRlEjbGp',
  },
  {
    title: 'PCB Design – Pebbles Electronics',
    description: 'Hands-on experience in PCB design tools and techniques',
  },
  {
    title: 'Ethical Hacking – SNS Square Workshop',
    description: 'Introduction to cybersecurity concepts and ethical hacking',
  },
];

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" id="certifications">
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Licenses & Certifications</h2>
        </div>
        <div className="certifications-list">
          {certifications.map((cert, i) => (
            <div 
              className={`certification-card fade-up${inView ? ' visible' : ''}`} 
              style={{ 
                transitionDelay: `${(i + 1) * 0.1}s`,
                cursor: cert.link ? 'pointer' : 'default',
                position: 'relative'
              }}
              key={i}
              onClick={() => cert.link && window.open(cert.link, '_blank', 'noopener,noreferrer')}
            >
              <div className="cert-icon">
                <FiAward />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>
              </div>
              {cert.link && (
                <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-tertiary)' }}>
                  <FiExternalLink size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
