import React from 'react';
import HighlightCard from './HighlightCard';

const HighlightsFeed = ({ highlights }) => {
  return (
    <div>
      {highlights.map((highlight, index) => (
        <HighlightCard key={index} highlight={highlight} />
      ))}
    </div>
  );
};

export default HighlightsFeed;
