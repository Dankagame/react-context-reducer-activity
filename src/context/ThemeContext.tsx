import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { LIGHT_THEME, DARK_THEME } from "../constants/theme";

export type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Holds the current theme and shares it with all children
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to read the theme context safely
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
