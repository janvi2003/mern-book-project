/* eslint-disable react/jsx-key */
import React from 'react';
import { Card } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';

const Blog = () => {
  const posts = [
    {
      _id: '1',
      title: 'Exploring React',
      author: 'John Doe',
      content: 'This is a brief overview of React and its features.'
    },
    {
      _id: '2',
      title: 'Understanding JavaScript',
      author: 'Jane Smith',
      content: 'JavaScript is a versatile language used for web development.'
    },
    {
      _id: '3',
      title: 'CSS Tips and Tricks',
      author: 'Alice Johnson',
      content: 'Improve your CSS skills with these tips and tricks.'
    },
    {
      _id: '4',
      title: 'Web Development Trends 2024',
      author: 'Bob Brown',
      content: 'Stay updated with the latest trends in web development.'
    },
  ];

  const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-8'>All Blog Posts</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3 grid-cols-1'>
        {
          posts.map((post, index) => (
            <Card key={post._id} className={`flex flex-col justify-between h-full transform hover:scale-105 transition-transform duration-300 shadow-lg border rounded-lg overflow-hidden ${colors[index % colors.length]}`}>
              <div className='h-40 w-full flex items-center justify-center'>
                <HiUserCircle className='h-full w-full text-gray-400' />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                  <span className='text-indigo-700'>{post.title}</span>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-1">
                  <span className='text-teal-600'>{post.author}</span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {post.content}
                </p>
                <div className='mt-auto'>
                  <button className='bg-gradient-to-r from-teal-400 to-blue-600 font-semibold text-white py-2 w-full rounded hover:from-teal-500 hover:to-blue-700 transition-all duration-200'>
                    Read More
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

export default Blog;
