import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className='relative mt-8 py-2 px-4 lg:px-12 bg-teal-100'>
      {/* Content */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-bold mb-4 leading-snug text-gray-800'>
            Discover the <span className='text-blue-700'>2023 National Book Awards</span> Shortlist
          </h2>
          <p className='text-md mb-4 text-gray-700'>
            Dive into celebrated books of the year and explore the finest selections in fiction.
          </p>
          <Link to="/shop" className='block'>
            <button className='bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300'>
              Claim Your Promo Code
            </button>
          </Link>
        </div>
        <div className='md:w-1/2'>
          <img src={bookPic} alt='Award-winning books' className='w-3/4 h-auto rounded-lg' />
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
