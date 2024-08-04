import React, { useState, useEffect } from 'react';
import { HiChartPie, HiOutlineCloudUpload, HiInbox, HiUser, HiTable } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'; // For chart visualization

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    series: [75, 25],
    labels: ['Books Sold', 'Books Available'],
  });

  useEffect(() => {
    // Simulating data fetch
    const fetchData = () => {
      setChartData({
        series: [Math.random() * 100, 100 - Math.random() * 100],
        labels: ['Books Sold', 'Books Available'],
      });
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
          <p className="text-gray-600">Welcome to your bookstore dashboard! Here’s a snapshot of your store's performance.</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Chart Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="w-full h-64">
            <Chart
              options={{
                chart: {
                  type: 'donut',
                },
                labels: chartData.labels,
                colors: ['#34D399', '#60A5FA'],
                plotOptions: {
                  pie: {
                    donut: {
                      size: '60%',
                    },
                  },
                },
                dataLabels: {
                  enabled: true,
                },
              }}
              series={chartData.series}
              type="donut"
              height="100%"
            />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiChartPie className="text-blue-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-gray-600">Get a quick overview of your bookstore's performance.</p>
            </div>
          </div>
          <Link to="/admin/dashboard/overview" className="text-blue-500 hover:underline flex items-center gap-1">
            <span>View Overview</span>
            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiOutlineCloudUpload className="text-green-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Upload Books</h2>
              <p className="text-gray-600">Easily add new books to your inventory.</p>
            </div>
          </div>
          <Link to="/admin/dashboard/upload" className="text-blue-500 hover:underline flex items-center gap-1">
            <span>Upload Books</span>
            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiInbox className="text-yellow-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Manage Books</h2>
              <p className="text-gray-600">Edit and manage your existing book inventory.</p>
            </div>
          </div>
          <Link to="/admin/dashboard/manage" className="text-blue-500 hover:underline flex items-center gap-1">
            <span>Manage Books</span>
            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiUser className="text-purple-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="text-gray-600">View and manage users of your bookstore.</p>
            </div>
          </div>
          <Link to="/admin/dashboard/users" className="text-blue-500 hover:underline flex items-center gap-1">
            <span>View Users</span>
            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiTable className="text-red-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Log Out</h2>
              <p className="text-gray-600">Sign out from your dashboard.</p>
            </div>
          </div>
          <Link to="/logout" className="text-blue-500 hover:underline flex items-center gap-1">
            <span>Log Out</span>
            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      <footer className="mt-6 text-center">
        <p className="text-gray-600">© 2024 Your Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
