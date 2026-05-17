import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink, FiCpu, FiShield } from 'react-icons/fi';
import { SiSnowflake, SiSalesforce } from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa6';

const certifications = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    description: 'Covers basic AI concepts and Azure AI services',
    link: 'https://www.credly.com/badges/0ff80fc4-7372-4264-99f9-0611c08d8c20/linked_in_profile',
    icon: <FaMicrosoft />,
  },
  {
    title: 'Snowflake – SnowPro Associate',
    description: 'Focused on cloud data platform and data warehousing',
    link: 'https://achieve.snowflake.com/2fe99bc3-302b-4ae7-ac6a-7e4551b6ac0a#acc.iRlEjbGp',
    icon: <SiSnowflake />,
  },
  {
    title: 'Salesforce Certified Agentforce Specialist',
    description: 'Certified in Salesforce Agentforce tools, automation workflows, and CRM-based solutions.',
    link: 'https://trailhead.salesforce.com/fr/credentials/certification-detail-print/?searchString=IcRjODC03kMajLa122oUyNrF7MMZ2ji+X7KaT4lQqzaam7j+Ped6+4D+cGxNcbsN',
    icon: <SiSalesforce />,
  },
  {
    title: 'AWS AI Practitioner Challenge – Udacity',
    description: 'Completed training on AWS AI fundamentals and cloud-based AI services.',
    link: 'https://www.udacity.com/certificate/e/7bcdda5e-325d-11f1-8f04-8b0570844553',
    icon: <FaAws />,
  },
  {
    title: 'PCB Design – Pebbles Electronics',
    description: 'Hands-on experience in PCB design tools and techniques',
    icon: <FiCpu />,
  },
  {
    title: 'Ethical Hacking – SNS Square Workshop',
    description: 'Introduction to cybersecurity concepts and ethical hacking',
    icon: <FiShield />,
  },
];

function CertCard({ cert }) {
  const handleClick = () => {
    if (cert.link) window.open(cert.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="cert-ticker-card"
      onClick={handleClick}
      style={{ cursor: cert.link ? 'pointer' : 'default' }}
    >
      <div className="cert-icon">{cert.icon || <FiAward />}</div>
      <div className="cert-ticker-info">
        <h3>{cert.title}</h3>
        <p className="cert-description">{cert.description}</p>
      </div>
      {cert.link && (
        <span className="cert-ticker-link-icon">
          <FiExternalLink size={16} />
        </span>
      )}
    </div>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const doubled = [...certifications, ...certifications];

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
    <section className="section" id="certifications">
      <div ref={ref}>
        <div className="container">
          <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
            <span className="section-label">Certifications</span>
            <h2 className="section-title">Licenses &amp; Certifications</h2>
          </div>
        </div>

        <div className={`cert-ticker-wrapper fade-up${inView ? ' visible' : ''}`}>
          <div className="cert-ticker-fade cert-ticker-fade--left" />
          <div className="cert-ticker-fade cert-ticker-fade--right" />

          <div 
            className="cert-ticker-track"
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => { isHovered.current = false; handleMouseUpOrLeave(); }}
            onMouseUp={handleMouseUpOrLeave}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => { isHovered.current = true; }}
            onTouchStart={() => { isHovered.current = true; }}
            onTouchEnd={() => { isHovered.current = false; }}
          >
            {doubled.map((cert, i) => (
              <CertCard cert={cert} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
