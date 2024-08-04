/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Label, TextInput, Select,Checkbox,Textarea} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction","Romance","Non-Fiction", "Children's", "Biographies", "Business", "Cookbooks",
    "Educational", "History", "Kids", "Literature", "Magazines", "Medical", "Mystery",
    "Parenting", "Philosophy", "Poetry", "Religion", "Science", "Self-Help", "Sports",
    "Technology", "Travel", "Young Adult", "World", "Youth", "Religion & Spirituality",
    "Science & Medicine", "Self-Development", "Teen & Young Adult", "Thriller", "Adventure",
    "Art & Photography", "Cooking & Baking", "Crafts & Hobbies", "Dance & Music",
    "Film & Animation", "Food & Drink", "Gardening & Horticulture", "Home & Garden",
    "Health & Fitness", "Novel", "Science Fiction", "Science Fiction & Fantasy",
    "Short Story", "Spirituality", "Suspense",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }
  //handle book submission
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    //submit book data to server here
    const form=event.target;
    const bookTitle = form.bookTitle.value;
    // console.log(bookTitle);
    const authorName = form.authorName.value;
    const bookDescription = form.bookDescription.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const bookObj = {
      bookTitle,
      authorName,
      bookDescription,
      imageURL,
      category,
      bookPdfUrl,
    }
    // console.log(bookObj);
    //send data to db
    fetch(`http://localhost:3001/upload-book`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    }).then( res=> res.json()).then(data =>{
      
      alert("Book uploaded successfully!");
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center'>Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex flex-col lg:w-[900px] mx-auto gap-6">
      <div className="flex gap-8">
      <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          <div className=' lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
           </div>
           <div className="flex gap-8">
           <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="categoryName"
              className='w-full rounded border-gray-300'
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
        </div>

        {/* Full-width row */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <textarea
            id="bookDescription"
            name='bookDescription'
            placeholder="Write a brief description of the book..."
            required 
            rows={4}
            className="w-full rounded border-gray-300 p-2"
          />
        </div>


        <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPdfUrl" 
          value="Book PDF URL" />
        </div>
        <TextInput 
        id="bookPdfUrl"
        name='bookPdfUrl'
         type="text" 
         placeholder="Book PDF URL Here"
          required />
      </div>

        <Button type="submit" className='mt-6 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300'>
          Upload Book
        </Button>
      </form>
    </div>
  )
}

export default UploadBook
