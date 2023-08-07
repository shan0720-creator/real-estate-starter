import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  const { isNightMode } = useTheme(); // Use the isNightMode value from the theme context

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  const houseStyles = {
    backgroundColor: isNightMode ? '#222' : '#f5f5f5', // Adjust colors as needed
    color: isNightMode ? '#ffffff' : '#000000',
  };

  return (
    <section className='mb-2'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} style={houseStyles} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
