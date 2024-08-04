/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  // Delete a book
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/book/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Book is successfully deleted");
        setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center'>Manage Your Books</h2>

      <div className="overflow-x-auto">
        <Table className='lg:w-[950px]'>
          <Table.Head>
            <Table.HeadCell>Sr No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Edit or Manage</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {allBooks.map((book, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.authorName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.category}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.price || '$10.00'}
                </Table.Cell>
                <Table.Cell className="flex items-center space-x-2">
                  <Link 
                    to={`/admin/dashboard/editBooks/${book._id}`} 
                    aria-label={`Edit ${book.bookTitle}`} 
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => handleDelete(book._id)} 
                    className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-700'
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
