import { createContext, useState } from 'react';

const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
