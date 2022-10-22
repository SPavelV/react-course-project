import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from '../../CustomRouter/components/Link/Link';

export const Header = () => {
  const { switchTheme } = useContext(ThemeContext);
  return (
    <header>
      <button onClick={switchTheme} type='button'>
        SwitchTheme
      </button>
      {/* <Link to='/basket'>Basket</Link> */}
      {/* <Link to='/restaurants'>Restaurants</Link> */}
    </header>
  );
};
