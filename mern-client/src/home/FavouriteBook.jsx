import React from 'react';
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';

const FavouriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt='' className='rounded md:w-10/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-4xl font-bold my-5 md:w-3/4 leading-snug'>
          Find Your Favourite <span className='text-blue-700'>Book Here!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
          Discover the perfect book for your interests with our extensive collection. Whether you’re looking for a gripping novel, insightful non-fiction, or a rare find, we have something for every reader. Our diverse selection ensures you can find exactly what you're looking for and enjoy a fulfilling reading experience.
        </p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div className='bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center'>
            <h3 className='text-4xl font-bold text-blue-700'>800+</h3>
            <p className='text-base text-gray-700'>Book Listings</p>
          </div>
          <div className='bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center'>
            <h3 className='text-4xl font-bold text-green-700'>550+</h3>
            <p className='text-base text-gray-700'>Registered Users</p>
          </div>
          <div className='bg-yellow-100 p-6 rounded-lg shadow-md flex flex-col items-center'>
            <h3 className='text-4xl font-bold text-yellow-700'>1200+</h3>
            <p className='text-base text-gray-700'>PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className='mt-12 block'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavouriteBook;
