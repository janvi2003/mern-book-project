// src/components/Overview.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [150, 200, 300, 400, 500, 600],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Over Time',
    },
  },
};

const Overview = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <header className='bg-blue-700 text-white py-6'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold'>Overview</h1>
        </div>
      </header>
      
      <main className='flex-grow container mx-auto p-6'>
        <section className='bg-white p-6 rounded-lg shadow-lg mb-6'>
          <h2 className='text-2xl font-semibold mb-4'>Welcome to the Overview</h2>
          <p className='text-gray-700'>
            This is the overview section where you can find summarized information about the dashboard's performance, key metrics, and other relevant data.
          </p>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-2'>Total Users</h3>
            <p className='text-gray-700 text-2xl'>1,234</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-2'>Total Sales</h3>
            <p className='text-gray-700 text-2xl'>$12,345</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-2'>New Books</h3>
            <p className='text-gray-700 text-2xl'>567</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-2'>Pending Orders</h3>
            <p className='text-gray-700 text-2xl'>89</p>
          </div>
        </section>

        <section className='bg-white p-6 rounded-lg shadow-lg mb-6'>
          <h2 className='text-2xl font-semibold mb-4'>Sales Over Time</h2>
          <Line data={data} options={options} />
        </section>

        <section className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Recent Activity</h2>
          <ul className='text-gray-700'>
            <li className='mb-2'>User John Doe purchased "The Great Gatsby".</li>
            <li className='mb-2'>New book "React for Beginners" added to the inventory.</li>
            <li className='mb-2'>User Jane Smith left a review for "To Kill a Mockingbird".</li>
            <li className='mb-2'>Admin uploaded new promotional banner.</li>
          </ul>
        </section>
      </main>

      <footer className='bg-gray-200 p-4 text-center'>
        <p className='text-gray-600'>© 2024 Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Overview;
