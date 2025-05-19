'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      html.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemDark);
      html.classList.toggle('dark', systemDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);