import { createContext, ReactNode, useState } from 'react';
import { ThemeContextType } from '../models/theme';

/* const ThemeContext = createContext<ThemeContextType>({
  //isDark: false,
  
  toggleTheme: () => {},
});

export default ThemeContext; */

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
