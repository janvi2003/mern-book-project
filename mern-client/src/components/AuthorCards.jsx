import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const AuthorCards = ({ headline, authors }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h1 className='text-5xl text-center font-bold text-black my-5'>{headline}</h1>
      <div className='mt-12'>
        <Swiper
          slidesPerView={1} // Default view
          spaceBetween={10}  // Space between slides
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 }, // Adjusted for better visibility
            1024: { slidesPerView: 4, spaceBetween: 40 }, // Adjusted for better visibility
            1280: { slidesPerView: 5, spaceBetween: 50 }, // Adjusted for larger screens
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {authors.map((author) => (
            <SwiperSlide key={author.id}>
              <div className='relative'>
                <div className='w-full h-64 overflow-hidden'>
                  <img 
                    src={author.imageURL} 
                    alt={author.name} 
                    className='object-cover w-full h-full'
                  />
                </div>
                <h3 className='text-lg font-bold mt-4 text-center'>{author.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx>{`
        .swiper-pagination {
          position: relative;
          top: 10px; /* Adjust this value as needed */
        }
      `}</style>
    </div>
  );
};

export default AuthorCards;
