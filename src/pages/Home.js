import React from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import HouseList from '../components/HouseList';
import Footer from '../components/Footer';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

const Home = () => {
  const { isNightMode } = useTheme(); // Use the isNightMode value from the theme context

  const pageStyles = {
    backgroundColor: isNightMode ? '#141414' : '#ffffff', // Adjust colors as needed
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
