'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);