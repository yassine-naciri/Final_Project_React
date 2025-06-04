import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-red-500 mb-6">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found.</p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
