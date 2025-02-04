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
        {/* <input type="text" value={teams} onChange={(e) => setTeams(e.target.value)} /> */}
        <div>
          <select id="dropdown" name="dropdown">
            <option value="option1">--Select--</option>
            <option value="option2">New York Yankees</option>
            <option value="option3">Baltimore Orioles</option>
            <option value="option4">Los Angeles Dodgers</option>
            <option value="option5">Atlanta Braves</option>
            <option value="option6">New York Mets</option>
          </select>
       </div>
      </label>
      <label>
        Select Players:
        {/* <input type="text" value={players} onChange={(e) => setPlayers(e.target.value)} /> */}
        <div>
          <select id="dropdown" name="dropdown">
            <option value="option1">--Select--</option>
            <option value="option2">ShoheiOhtani</option>
            <option value="option3">MiguelRojas</option>
            <option value="option4">WillSmith</option>
            <option value="option5">MaxMuncy</option>
            <option value="option6">ChrisTaylor</option>
          </select>
       </div>
      </label>
      <label>
        Select Highlight Types:
        {/* <input type="text" value={highlightTypes} onChange={(e) => setHighlightTypes(e.target.value)} /> */}
        <div>
          <select id="dropdown" name="dropdown">
            <option value="option1">--Select--</option>
            <option value="option2">Home Runs</option>
            <option value="option3">Grand Slams</option>
            <option value="option4">Web Gems</option>
            <option value="option5">No-Hitters</option>
            <option value="option6">Game-Winning Hits</option>
          </select>
       </div>
      </label>
      <button type="submit">Save Preferences</button>
    </form>
  );
};

export default PreferencesForm;
