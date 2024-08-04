import React from 'react';
import { HiQuestionMarkCircle, HiMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Help</h1>
          <p className="text-gray-600">Get assistance and support for any issues you encounter.</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* FAQ Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiQuestionMarkCircle className="text-blue-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                <li>How to reset your password?</li>
                <li>How to update your profile?</li>
                <li>How to contact support?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <HiMail className="text-green-600 text-4xl transform transition-transform duration-300 hover:rotate-12" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Contact Support</h2>
              <p className="text-gray-600">If you need further assistance, please reach out to our support team.</p>
            </div>
          </div>
          <a href="mailto:support@example.com" className="text-blue-500 hover:underline flex items-center gap-1">
            <span>Email Support</span>
            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>

      <footer className="mt-6 text-center">
        <p className="text-gray-600">© 2024 Your Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;
