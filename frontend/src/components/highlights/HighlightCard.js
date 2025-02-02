import React from 'react';

const HighlightCard = ({ highlight }) => {
  return (
    <div className="highlight-card">
      <h3>{highlight.title}</h3>
      <p>{highlight.summary}</p>
      {/* Add video or audio player here */}
    </div>
  );
};

export default HighlightCard;
