import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper(props: any) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme: string) {
    setTheme(theme);
    window.localStorage.setItem('data-theme', theme);
  }

  useEffect(() => {
    var localStorageTheme = window.localStorage.getItem('data-theme');
    if (localStorageTheme) {
      changeTheme(localStorageTheme);
    }
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark-mode');
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark-mode');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}