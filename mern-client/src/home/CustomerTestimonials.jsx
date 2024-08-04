import React from 'react';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: 'Alice Johnson',
      photoURL: 'https://via.placeholder.com/100',
      testimonial: 'This bookstore has an amazing selection of books. I always find something new and exciting to read!'
    },
    {
      name: 'Bob Smith',
      photoURL: 'https://via.placeholder.com/100',
      testimonial: 'Great customer service and fast shipping. Highly recommend!'
    },
  ];

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-8'>Customer Testimonials</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        {
          testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg flex items-center'>
              <img 
                src={testimonial.photoURL} 
                alt={`Photo of ${testimonial.name}`} 
                className='w-16 h-16 rounded-full mr-4'
              />
              <div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {testimonial.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CustomerTestimonials;
