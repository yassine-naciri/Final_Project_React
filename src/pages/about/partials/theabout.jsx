import React from 'react';
import images from '../../../constant/images'; 

const TheAbout = () => {
    return (
        <>
            
            <div className="relative h-70 flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(https://fashe-theme.myshopify.com/cdn/shop/t/7/assets/contact_top.jpg?v=24393269471667451341516034214)`
                    }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <h1 className="relative text-5xl font-bold text-white z-10">
                    ABOUT
                </h1>
            </div>

            <div className="py-16 md:py-24 ">
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="lg:w-1/2 flex justify-center  lg:justify-start">
<img src={images.Hero} alt="" className="w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-[30rem] h-auto hover:scale-110 transition-all duration-300 object-cover rounded-lg shadow-lg"/>               
         </div>

                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-semibold text-gray-800">
                                Our story
                            </h2>
                            <p className="text-gray-700  text-lg">
                                Phasellus egestas nisi nisl, lobortis ultricies risus semper nec. Vestibulum pharetra ac
                                ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna
                                dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna
                                ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet.
                                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in
                                vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec
                                iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel
                                dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum,
                                turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                                ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                            </p>

                            <div className="p-6 rounded-lg border-l-3 border-gray-300 space-y-2">
                                <p className="text-gray-600  text-lg">
                                    Creativity is just connecting things. When you ask creative people how they did
                                    something, they feel a little guilty because they didn't really do it, they just saw
                                    something. It seemed obvious to them after a while.
                                </p>
                                <p className="text-gray-500 font-medium ">
                                    - Steve Jobs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TheAbout;