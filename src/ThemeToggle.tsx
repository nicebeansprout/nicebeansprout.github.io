import React, { useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext, themes } from './contexts/ThemeContext';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

    return (
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <label className='themeSwitchContainer'>
            <Switch 
              checked={darkMode} 
              onChange={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);}}
              uncheckedIcon={<div className='toggle-icon'>🌞</div>}
              checkedIcon={<div className='toggle-icon'>🌚</div>}
              height={24}
              width={50}
              offColor="#c3beb3"
              onColor="#666"
              offHandleColor="#858076"
              onHandleColor="#333"
              >
              </Switch>
          </label>
        )}
      </ThemeContext.Consumer>
    )
}