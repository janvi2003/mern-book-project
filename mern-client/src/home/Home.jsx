/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavouriteBook from './FavouriteBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';
import Authors from './Authors';
import FeaturedAuthor from './FeaturedAuthor'; // Import the FeaturedAuthor component
import GenreHighlights from './GenreHighlights'; // Import the GenreHighlights component
// import CustomerTestimonials from './CustomerTestimonials'; // Import the CustomerTestimonials component
import NewsletterSignup from './NewsletterSignup'; // Import the NewsletterSignup component

const Home = () => {
    return (
        <div>
          <Banner/>
          <BestSellerBooks/>
          <Authors/>
          <FavouriteBook/>
          <GenreHighlights/>
          <PromoBanner/>
          <OtherBooks/>
          <FeaturedAuthor/>
          {/* <CustomerTestimonials/>  */}
          <Review/>
          <NewsletterSignup/> 
        </div>
    );
}

export default Home;
