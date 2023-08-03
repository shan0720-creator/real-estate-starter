import React from 'react';

import {Link} from 'react-router-dom';


import Dropdown from './dropdown';
import Dropdown2 from './dropdown2';




import Logo from '../assets/img/real_estate_log.jpg';
import ReactDropdown from 'react-dropdown';



const Header = () => {

  return( 
    
    <header className='py-6 mb-12 border-b'>
       <div className = 'container mx-auto flex justify-between items-center'>
        <Link to = '/'>
          <img className='h-24 w-142' src = {Logo} alt=""/>
          <h1 className='flex-1'>The Stovall Group</h1> 

        </Link>
        <div className='flex items-center gap-6 m-auto'>
    
          <Link className='bg-purple-300 px-2 py-2 rounded-lg color:white'>Rent</Link>
          <Link>Buy</Link>
          <Link>Sell</Link>
          <Dropdown>Manage property</Dropdown>
          <Dropdown2>Manage property</Dropdown2>
           
         </div>
        <div className='flex items-center gap-6'>
          <Link className=' hover: text-violet-900 transition' to=''>Log in</Link>
          <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to=''>Sign up</Link>
        </div>
       </div>
       
  </header>);
};

export default Header;
