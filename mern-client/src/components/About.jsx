import React from 'react';
import janviimg from '../assets/my-passport-photo.jpg';
const About = () => {
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-8 text-blue-600'>About Us</h2>

      <section className='flex flex-col-reverse lg:flex-row gap-8 my-12'>
        <div className='bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-300 lg:w-1/2'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Story</h3>
          <p className='text-gray-700'>
            Welcome to Bookstore! We are passionate about books and strive to provide a wide selection of titles for book lovers of all ages. Our journey began with a small collection of books and has grown into a comprehensive inventory that spans various genres and topics.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-300 lg:w-1/2'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h3>
          <p className='text-gray-700'>
            Our mission is to make reading accessible and enjoyable for everyone. We believe that books have the power to inspire, educate, and entertain. Whether you're looking for the latest bestsellers or timeless classics, we're here to help you find your next great read.
          </p>
        </div>
      </section>

      <section className='bg-white p-6 rounded-lg shadow-lg border mb-12'>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Meet the Team</h3>
        <div className='flex items-center bg-blue-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img 
            src={janviimg}
            alt='Jane Doe' 
            className='w-24 h-24 rounded-full mr-4'
          />
          <div>
            <h4 className='text-xl font-semibold text-blue-600'>Janvi</h4>
            <p className='text-gray-600'>Founder & CEO</p>
          </div>
          
        </div>
        <br></br>
        <div className='flex items-center bg-blue-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img 
            src='https://via.placeholder.com/100' 
            alt='Jane Doe' 
            className='w-24 h-24 rounded-full mr-4'
          />
          <div>
            <h4 className='text-xl font-semibold text-blue-600'>Kartik Sharma</h4>
            <p className='text-gray-600'>Co-founder</p>
          </div>
          
        </div>
        
      </section>
    </div>
  );
};

export default About;
