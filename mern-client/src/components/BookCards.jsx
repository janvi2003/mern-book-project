/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6';
import { Pagination } from 'swiper/modules';

const BookCard = ({ headline, books }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h1 className='text-5xl text-center font-bold text-black my-5'>{headline}</h1>
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                  <div className='w-full h-64 overflow-hidden'>
                    <img src={book.imageURL} alt='' className='object-cover w-full h-full' />
                  </div>
                  <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white' />
                  </div>
                </div>
                <div className='mt-4'>
                  <h3 className='text-lg font-bold'>{book.bookTitle}</h3>
                  <p className='text-gray-600'>{book.authorName}</p>
                  <p className='text-black mt-2'>$10.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
