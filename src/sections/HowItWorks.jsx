import React from 'react';
import { UserPlus, Layers, LineChart, Check, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { HOW_IT_WORKS_STEPS } from '../utils/constants';

const stepIconMap = {
  UserPlus,
  Layers,
  LineChart,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          badge="SEAMLESS ONBOARDING"
          title="Simple Steps to Transform Your"
          highlight="Academic Workflow"
          description="Designed to get faculty up and running in minutes, with zero friction and enterprise-grade security."
          className="reveal-on-scroll"
        />

        {/* 3-Step Process Grid */}
        <div className="how-it-works-wrapper">
          {/* Subtle Purple Connecting Line across steps */}
          <div className="steps-connecting-line" aria-hidden="true"></div>

          <div className="steps-grid">
            {HOW_IT_WORKS_STEPS.map((item, index) => {
              const Icon = stepIconMap[item.icon] || Sparkles;
              const delayClass = `delay-${index + 1}`;

              return (
                <div
                  key={item.step}
                  className={`step-card reveal-on-scroll ${delayClass}`}
                >
                  {/* Step Number Badge */}
                  <div className="step-badge-wrapper">
                    <div className="step-number-circle">
                      <span className="step-number-text">{item.step}</span>
                    </div>
                  </div>

                  {/* Card Main Box */}
                  <div className="step-card-box">
                    <div className="step-icon-wrap">
                      <Icon size={24} className="step-icon" />
                    </div>

                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-description">{item.description}</p>

                    {/* Step Highlight Bullets */}
                    <div className="step-bullet-list">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="step-bullet-item">
                          <div className="bullet-check">
                            <Check size={12} />
                          </div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Visual UI snapshot for each step */}
                    <div className="step-visual-box">
                      {index === 0 && (
                        <div className="mini-step-ui ui-step-1">
                          <div className="sso-chip">
                            <span className="sso-status-dot"></span>
                            <span>Single Sign-On Verified</span>
                          </div>
                          <div className="id-chip">Role: Senior Faculty & Research Chair</div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="mini-step-ui ui-step-2">
                          <div className="roster-badge">Active Roster: 6 Courses</div>
                          <div className="schedule-pill">Schedule Auto-Balanced ✓</div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="mini-step-ui ui-step-3">
                          <div className="analytics-pill">GPA 3.84 • 98% On-track</div>
                          <div className="export-pill">FERPA Audit Ready</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

