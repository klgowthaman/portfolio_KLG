import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Gowthaman KL. Built with React.</p>
        <div className="footer-links">
          <a href="https://github.com/klgowthaman" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/gowthaman-kl" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:klgowthaman86@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
