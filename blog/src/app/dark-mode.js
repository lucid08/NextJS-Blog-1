'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}