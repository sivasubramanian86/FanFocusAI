import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="ja">Japanese</option>
    </select>
  );
};

export default LanguageSelector;
