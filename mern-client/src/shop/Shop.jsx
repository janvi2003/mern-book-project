/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-8'>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3 grid-cols-1'>
        {
          books.map((book, index) => (
            <Card key={book._id} className={`flex flex-col justify-between h-full transform hover:scale-105 transition-transform duration-300 shadow-lg border rounded-lg overflow-hidden ${colors[index % colors.length]}`}>
              <div className='h-60 w-full flex items-center justify-center'>
                <img 
                  src={book.imageURL} 
                  alt={`Cover of ${book.bookTitle}`} 
                  className='h-full w-full object-contain' 
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                  <span className='text-indigo-700'>{book.bookTitle}</span>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-1">
                  <span className='text-teal-600'>{book.authorName}</span>
                </p>
                <div className='mt-auto'>
                  <button className='bg-gradient-to-r from-teal-400 to-blue-600 font-semibold text-white py-2 w-full rounded hover:from-teal-500 hover:to-blue-700 transition-all duration-200'>
                    Buy Now
                  </button>
                </div>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default Shop;
