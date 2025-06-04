import React, { useState, useEffect } from 'react';
import images from "../../../constant/images"

const SoldItem = () => {
    const [countdown, setCountdown] = useState({
        days: -2347,
        hours: -12,
        minutes: -12,
        seconds: -30
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                let newSeconds = prev.seconds - 1;
                let newMinutes = prev.minutes;
                let newHours = prev.hours;
                let newDays = prev.days;

                if (newSeconds < -59) {
                    newSeconds = -1;
                    newMinutes--;

                    if (newMinutes < -59) {
                        newMinutes = -1;
                        newHours--;

                        if (newHours < -23) {
                            newHours = -1;
                            newDays--;
                        }
                    }
                }

                return {
                    days: newDays,
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const CountdownBox = ({ value, label }) => (
        <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-gray-800">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
            </div>
        </div>
    );


    return (
        <div className="bg-gray-100 p-8 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
               
                        <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-96 lg:h-full flex items-center justify-center">
                            <img
                                src={images.GlassesItem}
                                alt="Glasses"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
                            />
                        </div>

                        <div className="p-8 lg:p-12  flex flex-col justify-center">
                  
                            <div className="mb-8">
                                <div className="w-90 h-24 mx-auto bg-gray-50 rounded-lg flex items-center justify-center mb-6 border border-gray-100 relative">
                                    <img 
                                        className='mt-15 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 z-10' 
                                        src={images.GlassesItem} 
                                        alt="Glasses" 
                                    />
                                </div>
                            </div>

                            <div className="text-center mb-8 relative z-20">
                                <h2 className="text-2xl font-light text-gray-700 mb-2">
                                    Boy2 T-Shirt with Roll Sleeve
                                </h2>
                                <p className="text-3xl font-bold text-gray-800">$20</p>
                            </div>

                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <CountdownBox value={countdown.days} label="days" />
                                <CountdownBox value={countdown.hours} label="hrs" />
                                <CountdownBox value={countdown.minutes} label="mins" />
                                <CountdownBox value={countdown.seconds} label="secs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoldItem;