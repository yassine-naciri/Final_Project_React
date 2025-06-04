import React, { useState } from 'react';
import images from "../../../constant/images"

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        {
            id: 1,
            name: "Boxy7 T-Shirt with Roll Sleeve",
            price: "$15.57",
            image: images.Boxy,
            hasAddToCart: true
        },
        {
            id: 2,
            name: "Boxy6 T-Shirt with Roll Sleeve",
            price: "$15.57",
            image: images.Box,
            hasAddToCart: false
        },
        {
            id: 3,
            name: "Boxy5 T-Shirt with Roll Sleeve",
            price: "$15.57",
            image: images.Picture,
            hasAddToCart: false
        },
        {
            id: 4,
            name: "Boxy4 T-Shirt with Roll Sleeve",
            price: "$15.57",
            image: images.Bo,
            hasAddToCart: false
        }

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-9xl  mx-auto px-4">
          
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
                        FEATURED PRODUCTS
                    </h2>
                </div>

                <div className="relative">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-400 text-sm">Image placeholder</span>
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

                                    <div className="absolute top-50 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-black/90 rounded-3xl text-amber-50 hover:bg-orange-700   px-6 py-3 rounded font-medium transition-colors duration-200">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-gray-700 font-medium mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-900 font-semibold">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
           
        
        </div>
    );
};

export default Products;