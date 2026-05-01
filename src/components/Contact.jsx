import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container" ref={ref}>
        <div className={`section-header fade-up${inView ? ' visible' : ''}`}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-wrapper">
          <p className={`contact-text fade-up stagger-1${inView ? ' visible' : ''}`}>
            I'm always open to discussing new opportunities, collaborations, or just a friendly chat about tech.
          </p>
          <div className={`contact-links fade-up stagger-2${inView ? ' visible' : ''}`}>
            <a href="mailto:gowthamanklece@gmail.com" className="contact-link-item"><FiMail /> gowthamanklece@gmail.com</a>
            <a href="https://github.com/klgowthaman" className="contact-link-item" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href="https://linkedin.com/in/gowthaman-kl" className="contact-link-item" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          </div>
          <form className={`contact-form fade-up stagger-3${inView ? ' visible' : ''}`} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="What's on your mind?" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              <FiSend /> {submitted ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
