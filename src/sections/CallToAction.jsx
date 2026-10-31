import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="section cta-section">
      <div className="container">
        <div className="cta-card reveal-on-scroll">
          {/* Subtle Background Glow Spheres */}
          <div className="cta-glow sphere-1"></div>
          <div className="cta-glow sphere-2"></div>
          <div className="cta-pattern"></div>

          <div className="cta-content">
            {/* Small Pre-heading pill */}
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>FACULTY EMPOWERMENT INITIATIVE</span>
            </div>

            {/* Headline */}
            <h2 className="cta-headline">
              Ready to Transform Your Academic Workflow?
            </h2>

            {/* Description */}
            <p className="cta-description">
              Bring all your academic activities together with FacultyFlow.
            </p>

            {/* Interactive Signup Form or Direct CTA */}
            {!submitted ? (
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="cta-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your institutional email (e.g., professor@university.edu)"
                    className="cta-input"
                    required
                  />
                  <Button
                    type="submit"
                    variant="white"
                    size="lg"
                    icon={ArrowRight}
                    className="cta-btn"
                  >
                    Get Started Today →
                  </Button>
                </div>
              </form>
            ) : (
              <div className="cta-success-box">
                <CheckCircle2 size={24} className="cta-success-icon" />
                <div>
                  <h4 className="cta-success-title">Welcome to FacultyFlow!</h4>
                  <p className="cta-success-desc">
                    We've dispatched onboarding instructions to <strong>{email}</strong>. Check your inbox to activate your faculty portal.
                  </p>
                </div>
              </div>
            )}

            {/* Guarantee / Micro-Trust Indicators */}
            <div className="cta-guarantees">
              <div className="cta-guarantee-item">
                <CheckCircle2 size={15} />
                <span>Free 30-Day Institution Trial</span>
              </div>
              <div className="cta-guarantee-item">
                <CheckCircle2 size={15} />
                <span>Zero Credit Card Required</span>
              </div>
              <div className="cta-guarantee-item">
                <CheckCircle2 size={15} />
                <span>FERPA & Student Privacy Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

