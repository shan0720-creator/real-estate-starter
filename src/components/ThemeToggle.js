// ThemeToggle.js

import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle = () => {
  const { isNightMode, toggleTheme } = useTheme();

  return (
    <button className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" onClick={toggleTheme}>
      {isNightMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
