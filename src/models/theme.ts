export type ThemeContextType = {
  theme: string | null | undefined;
  toggleTheme: () => void | null | undefined;
  /*  setTheme: React.Dispatch<React.SetStateAction<string | undefined | null>>; */
};
