import React from 'react';

const MainBlog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Black Friday Guide: Best Sales & Discount Codes",
            author: "fashe-theme Admin",
            date: "Dec 28, 2017",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
            image: "https://fashe-theme.myshopify.com/cdn/shop/articles/blog-01.jpg?v=1514488158"
        },
        {
            id: 2,
            title: "The White Sneakers Nearly Every Fashion Girls Own",
            author: "fashe-theme Admin",
            date: "Dec 28, 2017",
            excerpt: "Duis ut velit gravida nibh bibendum commodo. Sus pendisse pellentesque mattis augue id euismod. Inter-dum et...",
            image: "https://fashe-theme.myshopify.com/cdn/shop/articles/blog-02.jpg?v=1514488127"
        },
        {
            id: 3,
            title: "New York SS 2018 Street Style: By Annina Mislin",
            author: "fashe-theme Admin",
            date: "Dec 28, 2017",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
        }
    ];

    const features = [
        {
            title: "Free Delivery Worldwide",
            subtitle: "Mirum est notare quam littera gothica"
        },
        {
            title: "30 Days Return",
            subtitle: "Simply return it within 30 days for an exchange."
        },
        {
            title: "Store Opening",
            subtitle: "Shop open from Monday to Sunday"
        }
    ];

    return (
        <div>
            <div className="bg-gray-50 py-16">
                <div className="w-full mx-auto px-4 ">
                 
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        OUR BLOG
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                           
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                        {post.title}
                                    </h3>

                                    <div className="flex items-center text-sm text-gray-600 mb-4">
                                        <span>by {post.author}</span>
                                        <span className="mx-2">on</span>
                                        <span>{post.date}</span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-16 flex col items-center ">
                <div className="max-w-7xl mx-auto px-4 ">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        @ FOLLOW US ON INSTAGRAM
                    </h2>
                   
                </div>
            </div>

            <div className="bg-white py-10">
                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {features.map((feature, index) => (
                            <div key={index} className="h-35 text-[25px] text-center  p-6 rounded-lg ">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 italic">
                                    {feature.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBlog;