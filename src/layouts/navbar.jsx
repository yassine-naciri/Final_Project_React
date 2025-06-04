import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiX,
  FiMenu,
  FiShoppingCart,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLogIn,
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const navigationItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden p-4 flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-black">
            Fashe<span className="text-red-500">.</span>
          </h1>
          <button
            className="text-gray-800"
            onClick={() => navigate('/login')}
            aria-label="Login"
          >
            <FiLogIn size={22} />
          </button>
        </div>

        <button
          className="text-gray-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-50 border-b border-gray-200 flex flex-col transition-transform duration-300 z-40 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } lg:translate-y-0 lg:static lg:w-72 lg:h-screen lg:border-r lg:border-b-0`}
        style={{ height: isOpen ? '100vh' : 'auto' }}
      >
        {/* Close button on mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-700 p-2 lg:hidden"
          aria-label="Close menu"
        >
          <FiX size={26} />
        </button>

        {/* Logo */}
        <div className="px-6 py-6 flex items-center justify-center border-b border-gray-200">
          <a href="/" className="text-4xl font-bold text-black">
            Fashe<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Icons on desktop */}
        <div className="hidden lg:flex px-6 py-5 border-b border-gray-200 justify-center space-x-5">
          <button
            className="text-gray-700 hover:text-red-500"
            aria-label="Login"
            onClick={() => navigate('/login')}
          >
            <FiLogIn size={26} />
          </button>
          <button
            className="text-gray-700 hover:text-red-500"
            aria-label="Cart"
            onClick={() => {
              alert('Coming Soon');
            }}
          >
            <FiShoppingCart size={26} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-5 overflow-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block text-center py-3 text-xl lg:text-2xl transition-colors ${
                    item.active
                      ? 'text-red-500 font-medium'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="px-6 py-6 border-t border-gray-200 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-red-500"
            aria-label="Facebook"
          >
            <FiFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-red-500"
            aria-label="Instagram"
          >
            <FiInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-red-500"
            aria-label="Twitter"
          >
            <FiTwitter size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
