import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
