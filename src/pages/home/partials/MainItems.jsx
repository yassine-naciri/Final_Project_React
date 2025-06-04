import React from 'react';
import images from '../../../constant/images';

const MainItems = () => {
    const categories = [
        {
            id: 1,
            title: "DRESSES",
            image: images.Dresses,
            alt: "Woman in floral wrap dress"
        },
        {
            id: 2,
            title: "FOOTWEAR",
            image: images.Footerwear,
            alt: "Black high-top sneakers with jeans"
        },
        {
            id: 3,
            title: "BAGS",
            image: images.Bag,
            alt: "Gray knit backpack"
        },
        {
            id: 4,
            title: "SUNGLASSES",
            image: images.Sunglasses,
            alt: "Black aviator sunglasses"
        },
        {
            id: 5,
            title: "WATCHES",
            image: images.Watch,
            alt: "Black minimalist watch"
        },
        {
            id: 6,
            title: "ACCESSORIES",
            image: images.Sac,
            alt: "Leather accessories and sunglasses flat lay"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                        <div className="aspect-[3/4] w-full">
                            <img
                                src={category.image}
                                alt={category.alt}
                                className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                    
                        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm">
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900 tracking-wide">
                                    {category.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainItems;