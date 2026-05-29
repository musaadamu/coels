import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      label: 'NCE I',
      value: '395',
      icon: '👥',
      color: 'rgba(33, 147, 176, 0.15)',
      accent: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
      glow: 'rgba(33, 147, 176, 0.25)'
    },
    {
      label: 'NCE II',
      value: '133',
      icon: '📚',
      color: 'rgba(255, 81, 47, 0.15)',
      accent: 'linear-gradient(45deg, #FF512F, #F09819)',
      glow: 'rgba(255, 81, 47, 0.25)'
    },
    {
      label: 'NCE III',
      value: '213',
      icon: '🎓',
      color: 'rgba(17, 153, 142, 0.15)',
      accent: 'linear-gradient(45deg, #11998e, #38ef7d)',
      glow: 'rgba(17, 153, 142, 0.25)'
    },
    {
      label: 'Diploma I',
      value: '504',
      icon: '💼',
      color: 'rgba(142, 45, 226, 0.15)',
      accent: 'linear-gradient(45deg, #8E2DE2, #4A00E0)',
      glow: 'rgba(142, 45, 226, 0.25)'
    },
    {
      label: 'Diploma II',
      value: '347',
      icon: '📖',
      color: 'rgba(245, 87, 108, 0.15)',
      accent: 'linear-gradient(45deg, #f093fb, #f5576c)',
      glow: 'rgba(245, 87, 108, 0.25)'
    },
    {
      label: 'Total Enrolled',
      value: '1,592+',
      icon: '✨',
      color: 'rgba(251, 146, 60, 0.15)',
      accent: 'linear-gradient(45deg, #FB923C, #F97316)',
      glow: 'rgba(251, 146, 60, 0.25)'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Section Header */}
        <div className="stats-header">
          <span className="stats-eyebrow">📊 COLLEGE AT A GLANCE</span>
          <h2 className="stats-title">
            Current Student <span className="stats-accent">Enrollment</span>
          </h2>
          <p className="stats-subtitle">
            2024/2025 Academic Session - Total Active Students
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, ${stat.color} 100%)`
              }}
            >
              {/* Color Bar */}
              <div
                className="stat-color-bar"
                style={{ background: stat.accent }}
              />

              {/* Icon */}
              <div
                className="stat-icon"
                style={{
                  background: stat.accent,
                  boxShadow: `0 8px 24px ${stat.glow}`
                }}
              >
                <span className="stat-icon-emoji">{stat.icon}</span>
              </div>

              {/* Value */}
              <div className="stat-value">{stat.value}</div>

              {/* Label */}
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="stats-note">
          <p>
            <strong>Note:</strong> Diploma enrollment includes spillover students from the Academic Secretary's office. 
            Final numbers updated regularly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
