import React from 'react';
import AliHazelwood from '../assets/Authors/Ali Hazelwood.jpeg'
const FeaturedAuthor = () => {
  const author = {
    name: 'Ali Hazelwood',
    bio: 'Ali Hazelwood is a writer of contemporary romance novels. Her books often explore themes of academia, strong heroines, and emotional connections.',
    photoURL: AliHazelwood,
    notableWorks: ['The Love Hypothesis', 'Love on the Brain']
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-8'>Featured Author: {author.name}</h2>
      <div className='bg-white p-6 rounded-lg shadow-lg flex items-center'>
        <img 
          src={author.photoURL} 
          alt={`Photo of ${author.name}`} 
          className='w-32 h-32 rounded-full mr-6'
        />
        <div>
          <p className='text-gray-700'>{author.bio}</p>
          <h3 className='text-xl font-semibold mt-4'>Notable Works:</h3>
          <ul className='list-disc list-inside text-gray-700'>
            {author.notableWorks.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAuthor;
