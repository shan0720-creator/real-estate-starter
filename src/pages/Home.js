import React from 'react';
import Banner from '../components/Banner'
import Search  from '../components/Search'
import HouseList from '../components/HouseList'
import Footer from '../components/Footer'

const Home = () => {
  return (
       <div className='min-h-[1800px]'>
        <Banner/>
        <Search/>
        <HouseList/>
        <Footer />
       </div>

  );
};

export default Home;
