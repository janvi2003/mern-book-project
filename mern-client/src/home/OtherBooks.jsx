import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCards';

const OtherBooks = () => {
    const[books,setBooks]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/all-books").then(res=> res.json()).then(data=> setBooks(data.slice(4,15)))
    },[])
  return (
    <div>
      <BookCard books={books} headline="Other Books"/>
    </div>
   )
}

export default OtherBooks