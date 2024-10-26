import React from 'react';
import tick from '../../../assets/Dashboard/tick.png';
import time from '../../../assets/Dashboard/time.png';
import ordersBg from '../../../assets/Dashboard/ordersBg.png';

const Orders = ({ currentTreatments, deliveryInfo, orderHistory, trackingInfo, quickLinks }) => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Orders Heading */}
            <h1 className="text-4xl text-dark-blue font-bold mb-6">Orders</h1>

            {/* Current Treatment Section */}
            <div className="bg-gradient-to-r from-white to-yellow p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg text-dark-blue font-semibold mb-4">Current Treatment</h2>

                {/* Map current treatments dynamically */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {currentTreatments.map((treatment, index) => (
                        <div key={index} className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-gradient-to-r from-superiory-blue to-[#D8ECFF] p-2 rounded-lg shadow-lg">
                            <div className='flex flex-col'>
                                <img src={treatment.img} alt={treatment.name} className="w-full h-20 object-contain mb-2" />
                                <p className="text-md text-center text-dark-blue font-semibold">{treatment.name}</p>
                            </div>
                            <div className="text-center flex flex-col">
                                <div className='flex flex-col'>
                                    <p className="text-md text-dark-blue">Weeks Left: <span className='text-red'>{treatment.weeksLeft}</span></p>
                                    <p className="text-md text-dark-blue">Weeks Done: <span className='text-green'>{treatment.weeksDone}</span></p>
                                </div>
                                <div className='flex lg:flex-col xl:flex-row gap-2'>
                                    <button className="bg-dark-blue text-yellow py-1 px-3 mt-2 rounded-2xl ml-2">Cured</button>
                                    <button className="bg-yellow text-dark-blue py-1 px-3 mt-2 rounded-2xl">Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Section - Delivery and Tracking */}
            <div className={`bg-${ordersBg} grid lg:grid-cols-9 2xl:grid-cols-12 sm:grid-cols-1 gap-4`}>
                {/* Left Section (90%) */}
                <div className="col-span-12 xl:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* 40% Section */}
                        <div className="col-span-12 md:col-span-4 space-y-4">
                            {/* Delivery Today Card */}
                            <div className="flex gap-4 items-center bg-gradient-to-r from-white to-yellow p-4 rounded-lg shadow-md">
                                <div>
                                    <img src={tick} alt={tick} className="w-full h-20 object-contain mb-2" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-dark-blue font-bold mb-1">Delivery Today</h3>
                                    <p className="text-md text-superiory-blue">By: {deliveryInfo.time}</p>
                                </div>
                            </div>

                            {/* Last Order Card */}
                            <div className="flex gap-4 items-center bg-gradient-to-r from-white to-yellow p-4 rounded-lg shadow-md">
                                <div>
                                    <img src={time} alt={time} className="w-full h-20 object-contain mb-2" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-dark-blue font-bold mb-1">Last Order</h3>
                                    <p className="text-md text-superiory-blue">Date: {orderHistory.date}</p>
                                </div>
                            </div>
                        </div>

                        {/* 60% Section */}
                        <div className="col-span-12 md:col-span-8">
                            <div className="bg-gradient-to-r from-white to-yellow-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-dark-blue text-lg font-semibold mb-2">Order Tracking</h3>

                                {/* Tracking Information */}
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-4">
                                    {trackingInfo.map((step, index) => (
                                        <div key={index} className="text-center">
                                            <img src={step.statusImg} alt={step.statusImg} className="w-full h-24 object-cover" />
                                            <p className="font-semibold text-dark-blue">{step.status}</p>
                                            <p className="text-xs text-gray-400">{step.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section (Quick Links - 10%) */}
                <div className="col-span-12 md:col-span-3 space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-dark-blue">Quick Links</h3>
                        <ul>
                            {quickLinks.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <a href={link.href} className="text-dark-blue hover:text-yellow hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
