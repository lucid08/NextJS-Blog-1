'use client';

import { useTheme } from '../ThemeProvider';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}