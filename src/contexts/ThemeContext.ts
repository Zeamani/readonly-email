import React from 'react';

export const themes = {
  dark: 'dark',
  light: 'light',
}

export const ThemeContext = React.createContext<{theme: string, setTheme: (theme: string) => void} | null>(null);