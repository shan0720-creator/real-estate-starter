import React from 'react';

import {Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; 
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <ThemeProvider>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
