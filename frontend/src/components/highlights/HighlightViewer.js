import React from 'react';

const HighlightViewer = ({ highlight }) => {
  return (
    <div>
      <h2>{highlight.title}</h2>
      <p>{highlight.summary}</p>
      {/* Add video player here */}
    </div>
  );
};

export default HighlightViewer;
