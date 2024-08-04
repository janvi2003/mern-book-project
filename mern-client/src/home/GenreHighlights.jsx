import React from 'react';

const GenreHighlights = () => {
  const genres = [
    { 
      name: 'Fiction', 
      books: [
        { 
          _id: '1',
          bookTitle: 'Just for the Summer',
          authorName: 'Abby Jimenez',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692118145i/195820807.jpg'
        },
        { 
          _id: '2',
          bookTitle: 'Remarkably Bright Creatures',
          authorName: 'Shelby Van Pelt',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg'
        }
      ] 
    },
    { 
      name: 'Travel', 
      books: [
        { 
          _id: '3',
          bookTitle: 'All Roads Lead to Rome',
          authorName: 'Sabrina Fedel',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696630332i/63107018.jpg'
        },
        { 
          _id: '4',
          bookTitle: 'The Heirloom',
          authorName: 'Jessie Rosen',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699892874i/195888868.jpg'
        }
      ] 
    }
  ];

  return (
    <div className='mt-2 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>
        Genre Highlights
      </h2>
      <div className='grid gap-12 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
        {
          genres.map((genre) => (
            <div key={genre.name} className='bg-white p-6 rounded-lg shadow-lg border border-gray-200'>
              <h3 className='text-3xl font-semibold mb-6 text-gray-900'>{genre.name}</h3>
              <div className='space-y-6'>
                {
                  genre.books.map((book) => (
                    <div key={book._id} className='flex items-start bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300'>
                      <img 
                        src={book.imageURL} 
                        alt={`Cover of ${book.bookTitle}`} 
                        className='w-24 h-32 object-cover mr-6 rounded-md border border-gray-300'
                      />
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-1">
                          {book.bookTitle}
                        </h5>
                        <p className="text-gray-700">
                          {book.authorName}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default GenreHighlights;
