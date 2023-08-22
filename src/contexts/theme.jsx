import React, { useContext } from 'react';

export const ThemeContext = React.createContext({
  theme: false,
  setTheme: () => {},
});

export function useThemeContext() {
  const theme = useContext(ThemeContext);

  return theme;
}
