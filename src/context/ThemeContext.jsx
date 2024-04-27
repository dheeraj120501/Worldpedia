import { createContext, useState } from 'react';

const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const preferenceTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    : 'dark';

  if (preferenceTheme === null) {
    localStorage.setItem('theme', systemTheme);
  }

  const [theme, setTheme] = useState(preferenceTheme || systemTheme);

  const changeTheme = () => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  };

  return <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
