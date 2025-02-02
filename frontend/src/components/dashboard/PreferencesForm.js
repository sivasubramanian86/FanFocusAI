import React, { useState } from 'react';

const PreferencesForm = () => {
  const [teams, setTeams] = useState('');
  const [players, setPlayers] = useState('');
  const [highlightTypes, setHighlightTypes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save preferences logic here
    console.log('Preferences:', { teams, players, highlightTypes });
  };

  return (
    <form className="preferences-form" onSubmit={handleSubmit}>
      <label>
        Select Teams:
        <input type="text" value={teams} onChange={(e) => setTeams(e.target.value)} />
      </label>
      <label>
        Select Players:
        <input type="text" value={players} onChange={(e) => setPlayers(e.target.value)} />
      </label>
      <label>
        Select Highlight Types:
        <input type="text" value={highlightTypes} onChange={(e) => setHighlightTypes(e.target.value)} />
      </label>
      <button type="submit">Save Preferences</button>
    </form>
  );
};

export default PreferencesForm;
