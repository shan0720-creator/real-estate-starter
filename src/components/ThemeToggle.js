import React from 'react';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

const ThemeToggle = () => {
  const { isNightMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle {isNightMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
