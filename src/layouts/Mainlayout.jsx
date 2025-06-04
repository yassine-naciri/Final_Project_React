// layouts/MainLayout.jsx
import React from 'react';
import Navbar from './navbar';

const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
  
            <Navbar />
            
            <div className="flex-1 h-screen overflow-y-auto">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;