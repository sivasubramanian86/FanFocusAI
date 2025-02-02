import React from 'react';
import PreferencesForm from './PreferencesForm';
import HighlightsFeed from '../highlights/HighlightsFeed';

const Dashboard = () => {
  // Placeholder highlights data
  const highlights = [
    { title: 'Home Run by Player A', summary: 'An amazing home run by Player A during the 7th inning.' },
    { title: 'Strikeout by Player B', summary: 'Player B strikes out the batter with a fastball.' },
  ];

  return (
    <div className="dashboard">
      <h1>FanFocusAI Dashboard</h1>
      <PreferencesForm />
      <div>
        <h2>Your Personalized Highlights</h2>
        <HighlightsFeed highlights={highlights} />
      </div>
    </div>
  );
};

export default Dashboard;
