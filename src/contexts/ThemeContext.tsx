import { createContext } from 'react';
import { ThemeContextType } from '../models/theme';

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export default ThemeContext;
