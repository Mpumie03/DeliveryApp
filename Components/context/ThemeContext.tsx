// components/context/ThemeContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: {
    textColor: string;
    backgroundColor: string;
  };
  setTheme: (theme: { textColor: string; backgroundColor: string }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: 'black',
    backgroundColor: 'white',
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
