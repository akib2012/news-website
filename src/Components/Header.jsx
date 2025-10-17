import React from 'react';
import { format, compareAsc } from "date-fns";
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div>
           <div className='flex flex-col justify-center items-center mt-5'>

            <img  src={logo} alt="" />
            <p className='my-3 text-xl text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-700'>{format(new Date(), ("EEEE , MMMM dd , yyyy"))}</p>
           </div>
        </div>
    );
};

export default Header;