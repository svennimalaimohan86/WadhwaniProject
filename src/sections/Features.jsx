import React from 'react';
import {
  CalendarDays,
  BarChart3,
  UserCheck,
  CheckSquare,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  FileCheck2,
  CalendarCheck2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { FEATURES } from '../utils/constants';

const iconMap = {
  CalendarDays,
  BarChart3,
  UserCheck,
  CheckSquare,
};

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          badge="INTELLIGENT ARCHITECTURE"
          title="Everything You Need to Manage"
          highlight="Academics"
          description="Powerful tools designed to make faculty management effortless, reliable, and deeply intuitive."
          className="reveal-on-scroll"
        />

        {/* 4 Feature Cards Grid */}
        <div className="features-grid">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const delayClass = `delay-${index + 1}`;

            return (
              <div
                key={feature.id}
                className={`feature-card reveal-on-scroll ${delayClass}`}
              >
                {/* Card Background Glow */}
                <div className="feature-card-glow"></div>

                {/* Top Row: Icon & Tag */}
                <div className="feature-card-header">
                  <div className="feature-icon-container">
                    <Icon size={24} className="feature-icon" />
                  </div>
                  <span className="feature-tag">{feature.tag}</span>
                </div>

                {/* Card Body */}
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>

                {/* Micro Visual Preview based on card type */}
                <div className="feature-card-micro-preview">
                  {feature.id === 'scheduling' && (
                    <div className="micro-slot-row">
                      <div className="micro-slot active">
                        <Clock size={12} />
                        <span>09:30 AM CS-301</span>
                      </div>
                      <div className="micro-slot">
                        <CalendarCheck2 size={12} />
                        <span>11:15 AM Lab 3</span>
                      </div>
                    </div>
                  )}

                  {feature.id === 'analytics' && (
                    <div className="micro-stat-row">
                      <div className="micro-bar-wrap">
                        <span className="micro-label">Class Avg</span>
                        <div className="micro-bar"><div className="micro-fill" style={{ width: '84%' }}></div></div>
                      </div>
                      <div className="micro-trend-badge">
                        <TrendingUp size={12} /> +4.2%
                      </div>
                    </div>
                  )}

                  {feature.id === 'attendance' && (
                    <div className="micro-attendance-row">
                      <div className="student-dots">
                        <span className="s-dot present"></span>
                        <span className="s-dot present"></span>
                        <span className="s-dot present"></span>
                        <span className="s-dot present"></span>
                        <span className="s-dot absent"></span>
                      </div>
                      <span className="micro-metric-text">98.2% Verified Record</span>
                    </div>
                  )}

                  {feature.id === 'tasks' && (
                    <div className="micro-task-row">
                      <div className="micro-task-item">
                        <FileCheck2 size={13} className="task-icon-done" />
                        <span>Assignment 3 Rubric Graded</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Metric / Learn more */}
                <div className="feature-card-footer">
                  <span className="feature-metric-label">{feature.metrics}</span>
                  <span className="feature-explore-link">
                    Explore <ArrowRight size={14} className="arrow-icon" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

