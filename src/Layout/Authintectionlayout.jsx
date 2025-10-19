import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Authintectionlayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
          <div >
              <Navbar></Navbar>
          </div>
           <div className='max-w-10/12 mx-auto'>
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Authintectionlayout;