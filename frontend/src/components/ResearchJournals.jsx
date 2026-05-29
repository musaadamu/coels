import React, { useState } from 'react';
import './ResearchJournals.css';

const ResearchJournals = () => {
  const [activeTab, setActiveTab] = useState('journals');

  const journals = [
    {
      title: 'Nguru Journal of Multidisciplinary Studies',
      description: 'A peer-reviewed journal publishing research across multiple disciplines including education, law, social sciences, and professional studies.',
      issn: 'ISSN: [XX-XXXX-XXXX]',
      frequency: 'Bi-annual',
      icon: '📖',
      link: '#',
      focus: 'Multidisciplinary Research'
    }
  ];

  const researchAreas = [
    {
      area: 'Educational Research',
      icon: '🎓',
      description: 'Advancing pedagogical methodologies and educational innovation',
      color: 'linear-gradient(45deg, #11998e, #38ef7d)'
    },
    {
      area: 'Legal Studies',
      icon: '⚖️',
      description: 'Exploring contemporary legal issues and constitutional matters',
      color: 'linear-gradient(45deg, #FF512F, #F09819)'
    },
    {
      area: 'Social Sciences',
      icon: '👥',
      description: 'Investigating social phenomena and community development',
      color: 'linear-gradient(45deg, #8E2DE2, #4A00E0)'
    },
    {
      area: 'Professional Studies',
      icon: '💼',
      description: 'Research in management, administration, and professional excellence',
      color: 'linear-gradient(45deg, #2193b0, #6dd5ed)'
    }
  ];

  const publications = [
    {
      year: 2024,
      count: 12,
      type: 'Research Articles Published'
    },
    {
      year: 2024,
      count: 5,
      type: 'Conference Proceedings'
    },
    {
      year: 2024,
      count: 8,
      type: 'Policy Research Papers'
    }
  ];

  return (
    <section className="research-journals-section">
      <div className="research-journals-container">
        {/* Section Header */}
        <div className="research-header">
          <span className="research-eyebrow">🔬 RESEARCH & JOURNALS</span>
          <h2 className="research-title">
            Academic <span className="research-accent">Publications & Research</span>
          </h2>
          <p className="research-subtitle">
            Advancing knowledge through scholarly research and peer-reviewed publications
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="research-tabs">
          <button
            className={`tab-btn ${activeTab === 'journals' ? 'active' : ''}`}
            onClick={() => setActiveTab('journals')}
          >
            📖 Official Journals
          </button>
          <button
            className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
            onClick={() => setActiveTab('research')}
          >
            🔬 Research Areas
          </button>
          <button
            className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            📊 Publication Stats
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Journals Tab */}
          {activeTab === 'journals' && (
            <div className="journals-content">
              {journals.map((journal, index) => (
                <div key={index} className="journal-card">
                  <div className="journal-icon">
                    <span>{journal.icon}</span>
                  </div>
                  <div className="journal-body">
                    <h3 className="journal-title">{journal.title}</h3>
                    <p className="journal-focus">{journal.focus}</p>
                    <p className="journal-description">{journal.description}</p>
                    <div className="journal-meta">
                      <span className="meta-item">
                        <strong>ISSN:</strong> {journal.issn}
                      </span>
                      <span className="meta-item">
                        <strong>Frequency:</strong> {journal.frequency}
                      </span>
                    </div>
                    <a href={journal.link} className="journal-link">
                      View Journal →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Research Areas Tab */}
          {activeTab === 'research' && (
            <div className="research-areas-content">
              <div className="research-areas-grid">
                {researchAreas.map((area, index) => (
                  <div key={index} className="research-area-card">
                    <div
                      className="area-icon"
                      style={{ background: area.color }}
                    >
                      <span>{area.icon}</span>
                    </div>
                    <h3 className="area-title">{area.area}</h3>
                    <p className="area-description">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="publication-stats-content">
              <div className="stats-cards">
                {publications.map((pub, index) => (
                  <div key={index} className="pub-stat-card">
                    <div className="stat-number">{pub.count}</div>
                    <div className="stat-label">{pub.type}</div>
                    <div className="stat-year">{pub.year}</div>
                  </div>
                ))}
              </div>
              <div className="research-info-box">
                <h4>Contributing to Academic Excellence</h4>
                <p>
                  Our researchers and faculty members are actively engaged in producing high-quality research 
                  that contributes to knowledge advancement in education, law, social sciences, and professional 
                  development. We encourage collaboration with international research partners and support open 
                  access to scholarly works.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Submit Research CTA */}
        <div className="research-submit-cta">
          <div className="cta-content">
            <h3>Want to Publish Your Research?</h3>
            <p>Submit your manuscript to our peer-reviewed journal and contribute to our academic community.</p>
            <button className="cta-button">
              📤 Submit Manuscript
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchJournals;
