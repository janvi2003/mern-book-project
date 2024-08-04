import React from 'react';

const Documentation = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-6">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-blue-700">Documentation</h1>
          <p className="text-gray-600 mt-2">Find detailed documentation to help you with the bookstore application.</p>
        </header>

        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Getting Started Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
              <p>Here you will find the basics to get started with our bookstore application.</p>
              <a href="#" className="text-blue-500 hover:underline flex items-center gap-1 mt-4">
                Read More
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* API Reference Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h2 className="text-xl font-semibold mb-4">API Reference</h2>
              <p>Explore our API documentation for integration and customization.</p>
              <a href="#" className="text-blue-500 hover:underline flex items-center gap-1 mt-4">
                Read API Docs
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">© 2024 Your Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Documentation;
