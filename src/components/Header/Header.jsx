import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Header = () => {
  const { switchTheme } = useContext(ThemeContext);
  return (
    <header>
      <button onClick={switchTheme} type='button'>
        SwitchTheme
      </button>
    </header>
  );
};
