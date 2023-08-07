import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Dropdown from './dropdown';
import Dropdown2 from './dropdown2';
import Logo from '../assets/img/real_estate_log.jpg';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook
import './Header.css'; // Import the CSS file

const Header = () => {
  const { isNightMode, toggleTheme } = useTheme(); // Use the isNightMode and toggleTheme values from the theme context

  const bodyStyles = {
    backgroundColor: isNightMode ? '#141414' : '#ffffff', // Adjust colors as needed
    color: isNightMode ? '#ffffff' : '#000000',
  };

  return (
    <div style={bodyStyles}> {/* Apply styles to the entire body */}
      <header className={`py-6 mb-12 border-b ${isNightMode ? 'dark-header' : 'light-header'}`}>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/'>
            <img className='h-24 w-142' src={Logo} alt="" />
            <h1 className='flex-1'>The Stovall Group</h1>
          </Link>
          <div className='flex items-center gap-6 m-auto'>
            <Link className='bg-purple-300 px-2 py-2 rounded-lg color:white'>Rent</Link>
            <Link>Buy</Link>
            <Link>Sell</Link>
            <Dropdown>Manage property</Dropdown>
            <Dropdown2>Manage property</Dropdown2>
            <button className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" onClick={toggleTheme}>
              {isNightMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          <div className='flex items-center gap-6'>
            <Link className='hover:text-violet-900 transition' to=''>Log in</Link>
            <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to=''>Sign up</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
