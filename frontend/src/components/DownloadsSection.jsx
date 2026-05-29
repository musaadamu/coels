import React, { useState } from 'react';
import './DownloadsSection.css';

const documents = [
  {
    name: 'APER Form Junior',
    filename: 'APER FORM JUNIOR.docx',
    type: 'APER',
    description: 'Academic Performance Evaluation Report for Junior staff',
    icon: '📋',
    accent: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
    glow: 'rgba(33, 147, 176, 0.25)'
  },
  {
    name: 'APER Form Senior',
    filename: 'APER_FORM_SENIOR[1].docx',
    type: 'APER',
    description: 'Academic Performance Evaluation Report for Senior staff',
    icon: '📋',
    accent: 'linear-gradient(45deg, #FF512F, #F09819)',
    glow: 'rgba(255, 81, 47, 0.25)'
  },
  {
    name: 'APER Form Academic',
    filename: 'APER_FORM_ACADEMIC[1] (1).docx',
    type: 'APER',
    description: 'Academic Performance Evaluation Report template',
    icon: '📋',
    accent: 'linear-gradient(45deg, #11998e, #38ef7d)',
    glow: 'rgba(17, 153, 142, 0.25)'
  },
  {
    name: 'Publications Assessment Form',
    filename: 'PUBLICATIONS ASSESSMENT FORM (1).doc',
    type: 'PUBLICATION',
    description: 'Form for assessing academic publications and research output',
    icon: '📚',
    accent: 'linear-gradient(45deg, #8E2DE2, #4A00E0)',
    glow: 'rgba(142, 45, 226, 0.25)'
  },
  {
    name: 'Appraisal Template',
    filename: 'TEMPLATE FOR APPRAISAL.docx',
    type: 'APPRAISAL',
    description: 'Standard template for staff appraisal and evaluation',
    icon: '⭐',
    accent: 'linear-gradient(45deg, #f093fb, #f5576c)',
    glow: 'rgba(245, 87, 108, 0.25)'
  }
];

const DownloadsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDownload = (filename) => {
    // Create a download link
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="downloads-section">
      <div className="downloads-container">
        {/* Section Header */}
        <div className="downloads-header">
          <span className="downloads-eyebrow">📥 RESOURCES</span>
          <h2 className="downloads-title">
            Download Important <span className="downloads-accent">Documents</span>
          </h2>
          <p className="downloads-subtitle">
            Access essential forms and templates for staff evaluation, academic assessment, and professional development.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="documents-grid">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="document-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? `0 16px 36px ${doc.glow}` : '0 4px 16px rgba(15, 32, 39, 0.08)'
              }}
            >
              {/* Color Bar */}
              <div
                className="document-color-bar"
                style={{ background: doc.accent }}
              />

              {/* Card Content */}
              <div className="document-content">
                {/* Icon and Type Badge */}
                <div className="document-header-row">
                  <div
                    className="document-icon"
                    style={{
                      background: doc.accent,
                      boxShadow: `0 6px 16px ${doc.glow}`
                    }}
                  >
                    <span className="icon-emoji">{doc.icon}</span>
                  </div>
                  <span className="document-badge">{doc.type}</span>
                </div>

                {/* Document Title */}
                <h3 className="document-name">{doc.name}</h3>

                {/* Description */}
                <p className="document-description">{doc.description}</p>

                {/* File info */}
                <div className="document-footer">
                  <span className="file-info">
                    📄 {doc.filename.split('.').pop().toUpperCase()}
                  </span>
                  <button
                    className="download-btn"
                    onClick={() => handleDownload(doc.filename)}
                    style={{
                      background: doc.accent,
                      boxShadow: hoveredIndex === index ? `0 8px 20px ${doc.glow}` : 'none'
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
