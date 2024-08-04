// src/components/Logout.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout().then(() => {
            navigate('/login');
        }).catch(error => {
            console.error("Error logging out: ", error);
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Are you sure you want to logout?</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Logout;
