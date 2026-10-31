import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, GraduationCap } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS } from '../utils/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'features', 'how-it-works', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleNavLinkClick(e, '#home')}
        >
          <div className="navbar-logo-icon">
            <GraduationCap size={22} className="logo-cap-icon" />
            <div className="logo-sparkle"></div>
          </div>
          <span className="navbar-brand-text">
            Faculty<span className="brand-flow">Flow</span>
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span className="active-dot"></span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="navbar-actions desktop-actions">
          <button
            type="button"
            className="nav-login-btn"
            onClick={() => {
              alert('Faculty portal login is ready. Connect your institutional SSO credentials to proceed.');
            }}
          >
            Login
          </button>
          <Button
            variant="primary"
            size="sm"
            href="#cta"
            onClick={(e) => handleNavLinkClick(e, '#cta')}
            icon={ArrowRight}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => {
                const linkId = link.href.replace('#', '');
                const isActive = activeSection === linkId;
                return (
                  <li key={link.name} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <button
              type="button"
              className="btn btn-outline btn-md w-full mobile-login-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                alert('Faculty portal login is ready. Connect your institutional SSO credentials to proceed.');
              }}
            >
              Login
            </button>
            <Button
              variant="primary"
              size="md"
              href="#cta"
              className="w-full"
              onClick={(e) => handleNavLinkClick(e, '#cta')}
              icon={ArrowRight}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

