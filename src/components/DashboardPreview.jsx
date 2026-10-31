import React, { useState } from 'react';
import {
  Users,
  BookOpen,
  UserCheck,
  Award,
  Calendar,
  Clock,
  Search,
  Bell,
  CheckCircle2,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Zap,
  MoreVertical,
  Layers
} from 'lucide-react';

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('all');

  const scheduleItems = [
    {
      time: '09:00 - 10:30 AM',
      title: 'CS-301: Advanced Algorithms',
      room: 'Lecture Hall 4B',
      type: 'Lecture',
      status: 'Live Now',
      statusColor: 'live',
      students: '72 Students',
    },
    {
      time: '11:15 - 12:45 PM',
      title: 'CS-204: Data Structures Lab',
      room: 'Lab Suite 302',
      type: 'Lab Practice',
      status: 'Upcoming',
      statusColor: 'upcoming',
      students: '48 Students',
    },
    {
      time: '02:00 - 03:00 PM',
      title: 'Curriculum & Accreditation Review',
      room: 'Faculty Boardroom',
      type: 'Department',
      status: 'Scheduled',
      statusColor: 'scheduled',
      students: 'CS Faculty',
    },
    {
      time: '03:30 - 04:30 PM',
      title: 'Student Mentorship & Office Hours',
      room: 'Office 412 / Hybrid',
      type: 'Mentorship',
      status: 'Open Slots (4)',
      statusColor: 'slots',
      students: 'Open Session',
    },
  ];

  const recentActivities = [
    {
      title: 'Assignment 4 Graded: Distributed Systems',
      subtitle: '48 submissions evaluated • Average 88.4%',
      time: '12m ago',
      icon: Award,
      badge: 'Automated',
    },
    {
      title: 'Attendance Verified: CS-301 Morning Block',
      subtitle: '68/72 students present • 94.4% turnout',
      time: '1h ago',
      icon: UserCheck,
      badge: 'Verified',
    },
    {
      title: 'New Mid-term Exam Schedule Published',
      subtitle: 'Synchronized with University Registrar SIS',
      time: '3h ago',
      icon: Calendar,
      badge: 'SIS Sync',
    },
  ];

  return (
    <div className="dashboard-preview-container floating-anim">
      {/* Decorative Glow Elements */}
      <div className="dashboard-glow-sphere top-glow"></div>
      <div className="dashboard-glow-sphere bottom-glow"></div>

      {/* Floating Micro Badge 1 */}
      <div className="floating-badge badge-top-left">
        <div className="floating-badge-icon zap">
          <Zap size={14} />
        </div>
        <div>
          <span className="floating-badge-title">SIS Realtime Sync</span>
          <span className="floating-badge-subtitle">Zero data discrepancy</span>
        </div>
      </div>

      {/* Floating Micro Badge 2 */}
      <div className="floating-badge badge-bottom-right">
        <div className="floating-badge-icon check">
          <CheckCircle2 size={14} />
        </div>
        <div>
          <span className="floating-badge-title">5.2 Hours Saved</span>
          <span className="floating-badge-subtitle">This week on administration</span>
        </div>
      </div>

      {/* Main Dashboard Mockup Window */}
      <div className="dashboard-window">
        {/* Window Chrome / Titlebar */}
        <div className="dashboard-window-bar">
          <div className="window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="window-address-bar">
            <ShieldCheck size={12} className="ssl-icon" />
            <span>app.facultyflow.edu/faculty/dashboard</span>
          </div>
          <div className="window-status-pill">
            <span className="pulse-dot-green"></span>
            <span>Live Portal</span>
          </div>
        </div>

        {/* Top Internal App Bar */}
        <div className="dashboard-app-header">
          <div className="dashboard-search">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              readOnly
              value="Search courses, student records, rosters..."
              className="dashboard-search-input"
            />
          </div>

          <div className="dashboard-user-bar">
            <button className="dash-icon-btn" aria-label="Notifications" type="button">
              <Bell size={16} />
              <span className="notification-dot"></span>
            </button>
            <div className="dash-profile">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Prof. Evelyn Reed"
                className="dash-avatar"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="dash-profile-info">
                <span className="dash-user-name">Dr. Evelyn Reed</span>
                <span className="dash-user-role">Head of CS Faculty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="dashboard-body">
          {/* Key KPI Metrics Grid */}
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-top">
                <span className="kpi-label">Total Students</span>
                <div className="kpi-icon-wrap lavender">
                  <Users size={16} />
                </div>
              </div>
              <div className="kpi-value-row">
                <span className="kpi-value">1,428</span>
                <span className="kpi-trend positive">
                  <TrendingUp size={12} /> +12.4%
                </span>
              </div>
              <span className="kpi-footer">Across 6 academic cohorts</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-top">
                <span className="kpi-label">Active Classes</span>
                <div className="kpi-icon-wrap blue">
                  <BookOpen size={16} />
                </div>
              </div>
              <div className="kpi-value-row">
                <span className="kpi-value">6 Courses</span>
                <span className="kpi-badge-neutral">18 hrs / wk</span>
              </div>
              <span className="kpi-footer">3 Undergraduate • 3 Masters</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-top">
                <span className="kpi-label">Attendance Overview</span>
                <div className="kpi-icon-wrap emerald">
                  <UserCheck size={16} />
                </div>
              </div>
              <div className="kpi-value-row">
                <span className="kpi-value">94.6%</span>
                <span className="kpi-trend positive">
                  <TrendingUp size={12} /> +2.1%
                </span>
              </div>
              <div className="kpi-progress-bar">
                <div className="kpi-progress-fill" style={{ width: '94.6%' }}></div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-top">
                <span className="kpi-label">Academic Performance</span>
                <div className="kpi-icon-wrap purple">
                  <Award size={16} />
                </div>
              </div>
              <div className="kpi-value-row">
                <span className="kpi-value">3.84 GPA</span>
                <span className="kpi-badge-highlight">Top Tier</span>
              </div>
              <span className="kpi-footer">88% distinction threshold</span>
            </div>
          </div>

          {/* Schedule & Activities Split View */}
          <div className="dashboard-split-grid">
            {/* Today's Schedule Card */}
            <div className="dash-panel schedule-panel">
              <div className="dash-panel-header">
                <div className="dash-panel-title-wrap">
                  <Calendar size={16} className="panel-title-icon" />
                  <h4>Today's Schedule</h4>
                </div>
                <span className="panel-meta">Oct 31, 2026 • 4 Events</span>
              </div>

              <div className="schedule-list">
                {scheduleItems.map((item, idx) => (
                  <div key={idx} className="schedule-item">
                    <div className="schedule-time-col">
                      <Clock size={13} />
                      <span>{item.time}</span>
                    </div>
                    <div className="schedule-info-col">
                      <span className="schedule-item-title">{item.title}</span>
                      <div className="schedule-item-details">
                        <span>{item.room}</span>
                        <span className="dot-sep">•</span>
                        <span>{item.students}</span>
                      </div>
                    </div>
                    <div className="schedule-status-col">
                      <span className={`status-pill pill-${item.statusColor}`}>
                        {item.statusColor === 'live' && <span className="live-indicator"></span>}
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Performance & Recent Activity */}
            <div className="dash-panel activity-panel">
              <div className="dash-panel-header">
                <div className="dash-panel-title-wrap">
                  <Layers size={16} className="panel-title-icon" />
                  <h4>Recent Activities</h4>
                </div>
                <span className="panel-meta-link">View All</span>
              </div>

              <div className="activity-list">
                {recentActivities.map((act, i) => {
                  const Icon = act.icon;
                  return (
                    <div key={i} className="activity-item">
                      <div className="activity-icon-wrap">
                        <Icon size={14} />
                      </div>
                      <div className="activity-content">
                        <div className="activity-header">
                          <span className="activity-title">{act.title}</span>
                          <span className="activity-time">{act.time}</span>
                        </div>
                        <span className="activity-subtitle">{act.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Performance Metric Bar at bottom */}
              <div className="mini-performance-card">
                <div className="perf-header">
                  <span>Semester Grade Distribution</span>
                  <span className="perf-score">89.2% Overall Pass</span>
                </div>
                <div className="perf-bar-stack">
                  <div className="stack-segment grade-a" style={{ width: '48%' }} title="Grade A: 48%"></div>
                  <div className="stack-segment grade-b" style={{ width: '34%' }} title="Grade B: 34%"></div>
                  <div className="stack-segment grade-c" style={{ width: '14%' }} title="Grade C: 14%"></div>
                  <div className="stack-segment grade-d" style={{ width: '4%' }} title="Grade D: 4%"></div>
                </div>
                <div className="perf-legend">
                  <span className="leg-item"><span className="leg-dot grade-a"></span>A (48%)</span>
                  <span className="leg-item"><span className="leg-dot grade-b"></span>B (34%)</span>
                  <span className="leg-item"><span className="leg-dot grade-c"></span>C (14%)</span>
                  <span className="leg-item"><span className="leg-dot grade-d"></span>D (4%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

