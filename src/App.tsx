import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";
import ContextProvider from "./contexts/FetchContext";

function App() {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };



  return (
    <ThemeContext value={{ isDark, toggleTheme }}>
      <ContextProvider>
        <Outlet />
      </ContextProvider>
    </ThemeContext>
  );
}

export default App;
