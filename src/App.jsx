import React, { useContext } from 'react';
import Home from './screens/Home/Home';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Home />
    </div>
  );
}

export default App;
