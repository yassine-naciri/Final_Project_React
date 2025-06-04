import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
import images from '../../../constant/images';


const products = [
    {
        id: 1,
        image: 'https://fashe-theme.myshopify.com/cdn/shop/products/item-03_720x960.jpg?v=1514269273', 
        price: '$20.00',
        title: "Boxy T-Shirt with Roll Sleeve Detail",

    },
    {
        id: 2,
        image: 'https://fashe-theme.myshopify.com/cdn/shop/products/item-10_928bd293-fd66-4b11-af8f-8e118c77549a_720x960.jpg?v=1514273397',
        price: '$20.00',
        title: "Boxy1 T-Shirt with Roll Sleeve",

    },
    {
        id: 3,
        image: images.Shopy8,
        title: 'Boxy2 T-Shirt with Roll Sleeve',
        price: '$20.00',

    },
    {
        id: 4,
        image: images.Shopy, 
        title: 'Boxy3 T-Shirt with Roll Sleeve',
        price: '$10.00',

    },
    {
        id: 5,
        image: images.Shopy0, 
        title: 'Boxy4 T-Shirt with Roll Sleeve',
        price: '$20.00',

    },
    {
        id: 6,
        image: images.Shopy4, 
        title: 'Boxy4 T-Shirt with Roll Sleeve',
        price: '$20.00',

    },
    {
        id: 7,
        image: images.Shopy4, 
        title: 'Boxy4 T-Shirt with Roll Sleeve',
        price: '$20.00',

    },

    {
        id: 8,
        image: images.Shopy4, 
        title: 'Boxy4 T-Shirt with Roll Sleeve',
        price: '$20.00',

    },
];

const MainShop = () => {
    return (
        <>
            <div className="relative h-70 flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("//fashe-theme.myshopify.com/cdn/shop/t/7/assets/collection_top.jpg?v=87143135852698735121516034213")`
                    }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <h1 className="relative text-5xl font-bold text-white z-10">
                    PRODUCTS
                </h1>
            </div>

            <div className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                   
                    <div className="lg:w-1/4 space-y-10">
            
                        <div className='text-[25px]'>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Best Seller (8 Items)</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Featured (8 Items)</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Men (8 Items)</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Women (8 Items)</a></li>
                            </ul>
                        </div>

                        <div className='text-[25px]'>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Color</h3>
                            <div className="space-y-2">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">black</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">grey</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">red</span>
                                </label>
                            </div>
                        </div>

                        <div className='text-[25px]'>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Price</h3>
                            <div className="space-y-2">
                                <label className="flex items-center text-gray-600">
                                    <input type="radio" name="price-filter" value="0-20" className="form-radio h-4 w-4 text-gray-600" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">0-20</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="radio" name="price-filter" value="20-40" className="form-radio h-4 w-4 text-gray-600" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">20-40</span>
                                </label>
                            </div>
                        </div>

                        <div className='text-[25px]'>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Size</h3>
                            <div className="space-y-2">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">L</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">M</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">S</span>
                                </label>
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 rounded" />
                                    <span className="ml-2 hover:text-orange-500 transition-colors">XL</span>
                                </label>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none "
                            />
                            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <main className="lg:w-3/4">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <select 
                                         
                                        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none "
                                    >
                                        <option value="Featured">Featured</option>
                                        <option value="best-seller">Best Selling</option>
                                        <option value="alf">Alphabetically, A-Z</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="name-AtoZ">Name: A to Z</option>
                                        <option value="name-ZtoA">Name: Z to A</option>
                                    </select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <select 
                                        
                                        className="border border-gray-300 rounded-md py-2 px-3 w-50 focus:outline-none "
                                    >
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="30">All</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-gray-600 text-[25px]">
                                Showing 1 to 8 of  items 
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map(product => (
                                <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden group relative pb-4">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />

                                        <button className="absolute left-5 bottom-2 left-0 w-[80%] bg-black rounded-3xl bg-opacity-70 text-white py-3 px-4 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 hover:bg-orange-600">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h4 className="text-lg font-medium text-gray-800 mb-2">
                                            {product.title}
                                        </h4>
                                        <p className="text-gray-900 font-bold text-lg">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainShop;