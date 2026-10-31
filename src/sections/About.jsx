import React from 'react';
import {
  Clock,
  Sparkles,
  CheckCircle2,
  TrendingDown,
  Layers,
  GraduationCap,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { IMPACT_METRICS } from '../utils/constants';

export default function About() {
  const workflowComparison = [
    {
      facultyFlow: 'Instant 1-Click SIS & Attendance Verification',
      traditional: 'Paper sheets & manual registrar entry',
      icon: Zap,
    },
    {
      facultyFlow: 'Conflict-Free Automated Timetable Generation',
      traditional: 'Endless spreadsheet emails and hall double-bookings',
      icon: Layers,
    },
    {
      facultyFlow: 'Continuous Predictive Student Analytics',
      traditional: 'Catching student struggles only after final exam failure',
      icon: Sparkles,
    },
    {
      facultyFlow: 'Unified Faculty Portal with Zero Friction',
      traditional: 'Navigating 4-6 disconnected legacy legacy systems',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative & Metrics */}
          <div className="about-content reveal-on-scroll">
            <div className="badge-pill">
              <span className="badge-dot"></span>
              <span>OUR MISSION & PURPOSE</span>
            </div>

            <h2 className="about-headline">
              Less Administration.{' '}
              <span className="gradient-text">More Education.</span>
            </h2>

            <p className="about-description">
              Modern educators spend up to 40% of their working hours wrestling with disjointed
              software, manual rosters, and repetitive reporting. FacultyFlow was engineered to
              eliminate this bureaucratic overhead entirely.
            </p>

            <p className="about-subtext">
              By consolidating scheduling, student performance tracking, verified attendance,
              and academic responsibilities into one seamless workspace, we empower faculty to
              dedicate their energy to what truly inspires: teaching, mentoring, and research.
            </p>

            {/* Impact Metric Chips */}
            <div className="impact-metrics-grid">
              {IMPACT_METRICS.map((metric, i) => (
                <div key={i} className="impact-metric-card">
                  <span className="metric-val">{metric.value}</span>
                  <span className="metric-lbl">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <Button
                variant="primary"
                size="md"
                href="#cta"
                icon={ArrowRight}
              >
                Join FacultyFlow Today
              </Button>
            </div>
          </div>

          {/* Right Column: Professional Illustration & Workflow Visual */}
          <div className="about-visual-col reveal-on-scroll delay-2">
            <div className="about-visual-card">
              <div className="visual-card-header">
                <div className="visual-header-left">
                  <div className="visual-brand-badge">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <h4 className="visual-title">The FacultyFlow Advantage</h4>
                    <span className="visual-subtitle">Direct Comparison with Legacy Systems</span>
                  </div>
                </div>
                <div className="visual-chip-live">
                  <span className="pulse-dot-green"></span>
                  <span>Modernized</span>
                </div>
              </div>

              {/* Comparison List */}
              <div className="comparison-list">
                {workflowComparison.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="comparison-row">
                      <div className="comp-facultyflow">
                        <div className="comp-icon-box">
                          <Icon size={14} />
                        </div>
                        <div className="comp-text-box">
                          <span className="comp-badge-flow">FacultyFlow</span>
                          <span className="comp-main-text">{item.facultyFlow}</span>
                        </div>
                      </div>
                      <div className="comp-traditional">
                        <span className="comp-badge-trad">Traditional</span>
                        <span className="comp-trad-text">{item.traditional}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote / Faculty Testimonial */}
              <div className="about-quote-box">
                <p className="about-quote-text">
                  "FacultyFlow gave me back nearly a full working day every week. Course scheduling
                  and attendance management used to be a chore; now they are completely effortless."
                </p>
                <div className="about-quote-author">
                  <span className="quote-author-name">Dr. Marcus Vance</span>
                  <span className="quote-author-title">Dean of Academic Affairs, Stanford Tech Institute</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

