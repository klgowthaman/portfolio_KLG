import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: false, submitted: true, error: null });

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open user's email client pre-filled with the message details
    window.location.href = `mailto:klgowthaman86@gmail.com?subject=${subject}&body=${body}`;

    // Reset the form fields
    setFormData({ name: '', email: '', message: '' });
    
    // Clear submission success feedback after a short duration
    setTimeout(() => {
      setStatus(prev => ({ ...prev, submitted: false }));
    }, 5000);
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
            <a href="mailto:klgowthaman86@gmail.com" className="contact-link-item"><FiMail /> klgowthaman86@gmail.com</a>
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
            <div className="form-actions" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button type="submit" className="btn-primary" disabled={status.submitting} style={{ alignSelf: 'flex-start' }}>
                <FiSend /> {status.submitting ? 'Sending...' : status.submitted ? 'Sent!' : 'Send Message'}
              </button>
              
              {status.submitted && (
                <p className="form-feedback success" style={{ color: '#4caf50', fontSize: '0.9rem', fontWeight: '500' }}>
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status.error && (
                <p className="form-feedback error" style={{ color: '#f44336', fontSize: '0.9rem', fontWeight: '500' }}>
                  {status.error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
