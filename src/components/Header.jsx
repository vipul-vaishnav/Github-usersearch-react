import React from 'react';
import Sun from '../images/icon-sun.svg';
import Moon from '../images/icon-moon.svg';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header" role="columnheader">
      <h1 className="header-title">devfinder</h1>
      <button type="button" className="header-btn" onClick={toggleTheme}>
        <span className="header-btn-text">{theme === 'light' ? 'Dark' : 'Light'}</span>
        <span className="header-btn-icon">
          <img src={theme === 'light' ? Moon : Sun} className={`img-${theme}`} alt="light icon" />
        </span>
      </button>
    </header>
  );
};

export default Header;
