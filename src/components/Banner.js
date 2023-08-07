import React from 'react';
import Dropdown3 from './dropdown3';

const Banner = () => {
  return <section>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:ml-8 xl:ml-[135] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'><span className='text-violet-700'>Search</span> Properties to Rent</h1>
          </div>
          <Dropdown3 className="ml-15">Saerch with search Bar</Dropdown3>
        </div>
  </section>;
};

export default Banner;
