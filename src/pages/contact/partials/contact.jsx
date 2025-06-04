import React, { useState } from 'react';
import images from '../../../constant/images';

const ContactSections = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            alert('sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

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
                    CONTACT
                </h1>
            </div>

            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <div className="space-y-4">
                            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                                <div className="relative h-96">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.058437467203!2d-7.5338517!3d33.6037882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1749022687639!5m2!1sen!2sma"
                                        width="100%"
                                        height="100%"
                                        className='border-0'
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Google Map Location"
                                    ></iframe>
                                    <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-md z-10">
                                        <div className="font-semibold text-sm">LionsGeek</div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            4eme étage, Ain Sebaa Center, Route de Rabat-، Km 8, <br />
                                            Casablanca 20050
                                        </div>
                                        <a
                                            href="https://www.google.com/maps/place/LionsGeek/@33.6037882,-7.5338517,17z/data=!3m1!4b1!4m6!3m5!1s0xda7cdb2f812837f:0xbbcfc74fbc11b2d9!8m2!3d33.6037882!4d-7.5338517!16s%2Fg%2F11jy9l0d4m?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 text-xs mt-2 inline-block hover:underline"
                                        >
                                            View larger map
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[30px] font-semibold text-gray-800 mb-8">
                                Send us your message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-vertical"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-black text-white px-20 py-5 rounded-full hover:bg-red-600 font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Wait...' : 'SEND'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSections;