import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, PlayCircle, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import DashboardPreview from '../components/DashboardPreview';
import { TRUST_INDICATORS } from '../utils/constants';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
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
  };

  return (
    <section id="home" className="hero-section">
      {/* Background radial blurs */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>
      <div className="hero-grid-pattern"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="hero-content reveal-on-scroll">
            {/* Small Badge */}
            <div className="hero-badge">
              <Sparkles size={14} className="hero-badge-sparkle" />
              <span>SMARTER ACADEMIC MANAGEMENT</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Empowering Faculty.{' '}
              <span className="gradient-text">Simplifying Education.</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Manage academic activities, track student performance, organize schedules,
              and streamline faculty responsibilities – all in one intelligent platform.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <Button
                variant="primary"
                size="lg"
                href="#cta"
                onClick={(e) => handleScrollTo(e, 'cta')}
                icon={ArrowRight}
                className="hero-primary-btn"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#features"
                onClick={(e) => handleScrollTo(e, 'features')}
                icon={PlayCircle}
                className="hero-secondary-btn"
              >
                Explore Features
              </Button>
            </div>

            {/* Three Trust Indicators */}
            <div className="hero-trust-indicators">
              {TRUST_INDICATORS.map((item, index) => (
                <div key={index} className="trust-indicator-item">
                  <div className="trust-check-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="trust-text">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Social Proof / Security Endorsement */}
            <div className="hero-accreditation">
              <ShieldCheck size={16} className="accredit-icon" />
              <span>FERPA & GDPR Compliant • Trusted by 450+ Universities & Colleges</span>
            </div>
          </div>

          {/* Right Column: Realistic Dashboard Preview */}
          <div className="hero-dashboard-col reveal-on-scroll delay-2">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

