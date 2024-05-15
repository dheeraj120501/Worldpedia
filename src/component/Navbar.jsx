import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';

function Navbar({ className }) {
  let { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-between px-20 py-6 bg-light-bg text-light-text shadow-md shadow-gray-100 dark:shadow-gray-800 dark:bg-dark-element dark:text-dark-text ${className}`}
    >
      <div className="font-extraBold">Where in the world?</div>
      <button className="flex items-center" onClick={changeTheme}>
        {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  );
}

export default Navbar;
