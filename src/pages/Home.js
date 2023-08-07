// Home.js

import React from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import HouseList from '../components/HouseList';
import Footer from '../components/Footer';
import { useTheme } from '../ThemeContext';

const Home = () => {
  const { isNightMode } = useTheme();

  const pageStyles = {
    backgroundColor: isNightMode ? '#141414' : '#ffffff',
    color: isNightMode ? '#ffffff' : '#000000',
    minHeight: '1800px',
  };

  return (
    <div style={pageStyles}>
      <Banner />
      <Search />
      <HouseList />
      <Footer />
    </div>
  );
};

export default Home;
