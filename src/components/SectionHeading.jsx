import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <div className={`section-heading-wrapper ${align === 'left' ? 'align-left' : ''} ${className}`}>
      {badge && (
        <div className="badge-pill">
          <span className="badge-dot"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

