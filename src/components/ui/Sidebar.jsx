/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='md:w-2/6 xl:w-1/5 bg-gray-800'>
      <div className='p-6'>
        <p className='uppercase text-white text-2xl tracking-wide text-center font-bold'>
          RestaurantApp
        </p>

        <p className='mt-3 text-gray-600'>
          Administra tu restaurant en las siguientes opciones:
        </p>

        <nav className='mt-10'>
          <Link
            className='p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900'
            exact='true'
            to='/'>
            Ordenes
          </Link>
          <Link
            className='p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900'
            exact='true'
            to='/menu'>
            Menú
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
