/* eslint-disable no-unused-vars */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 flex items-center bg-gradient-to-r from-blue-100 to-teal-100 relative overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 to-teal-200 opacity-75 animate-pulse'></div>
      <div className='relative flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and Sell Your Books 
            <span className='text-blue-700'> for the Best Prices</span>
          </h2>
          <p className='md:w-4/5 text-gray-700'>
            Discover a wide range of books at unbeatable prices. Whether you're looking to buy or sell, we offer the best deals and a hassle-free experience.
          </p>
          <div className='flex items-center space-x-2'>
            <div className='relative flex-grow'>
              <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder='Search a book' 
                className='py-2 px-4 rounded-l-md outline-none shadow-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-200' 
              />
              <FaSearch className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400' />
            </div>
            <button className='bg-blue-700 px-6 py-2 text-white font-medium rounded-r-md shadow-md hover:bg-blue-800 transition-all duration-200'>
              Search
            </button>
          </div>
          <button className='mt-4 bg-teal-500 px-6 py-2 text-white font-medium rounded shadow-md hover:bg-teal-600 transition-all duration-200'>
            Explore Categories
          </button>
        </div>
        <div className='md:w-1/2'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
