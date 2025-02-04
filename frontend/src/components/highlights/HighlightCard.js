import React from 'react';

const HighlightCard = ({ highlight }) => {
  return (
    <div className="highlight-card">
      <h3 style={{ color: 'black' }}>{highlight.title}</h3>
      <p>{highlight.summary}</p>
      {/* Add video or audio player here */}
    </div>
  );
};

export default HighlightCard;
