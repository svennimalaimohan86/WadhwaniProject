import React from 'react';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';
import { FOOTER_LINKS } from '../utils/constants';

// Clean SVG Brand Icons
const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="contact" className="footer-root">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Description */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand" onClick={(e) => handleLinkClick(e, '#home')}>
              <div className="footer-logo-icon">
                <GraduationCap size={22} />
              </div>
              <span className="footer-brand-text">
                Faculty<span className="brand-flow">Flow</span>
              </span>
            </a>

            <p className="footer-desc">
              The intelligent academic and faculty management platform designed to simplify
              scheduling, student performance tracking, attendance, and faculty workflows.
            </p>

            <div className="footer-social-links">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-icon-btn">
                <TwitterIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon-btn">
                <GithubIcon size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon-btn">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>Features</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')}>How It Works</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Platform</a></li>
              <li><a href="#cta" onClick={(e) => handleLinkClick(e, '#cta')}>Get Started</a></li>
            </ul>
          </div>

          {/* Col 3: Features */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Features</h4>
            <ul className="footer-links-list">
              {FOOTER_LINKS.product.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="footer-links-col contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:support@facultyflow.edu">support@facultyflow.edu</a>
              </li>
              <li className="contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+18005553569">+1 (800) 555-FLOW</a>
              </li>
              <li className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Academic Tech Campus, Cambridge, MA 02138</span>
              </li>
            </ul>
            <div className="footer-support-pill">
              <span className="pulse-dot-green"></span>
              <span>24/7 Dedicated Faculty Support</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Copyright © 2026 FacultyFlow. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#about">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#about">Terms of Service</a>
            <span className="dot-sep">•</span>
            <a href="#about">FERPA Compliance</a>
          </div>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
