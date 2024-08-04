import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className='mt-28 px-4 lg:px-24 mb-12'>
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>
        Newsletter Signup
      </h2>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto'>
        <form>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-700 text-lg font-semibold mb-2'>
              Email Address:
            </label>
            <input 
              type='email' 
              id='email' 
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-150'
              placeholder='Enter your email'
              required
            />
          </div>
          <button 
            type='submit' 
            className='bg-gradient-to-r from-teal-400 to-blue-600 font-semibold text-white py-3 px-6 w-full rounded-lg hover:from-teal-500 hover:to-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
