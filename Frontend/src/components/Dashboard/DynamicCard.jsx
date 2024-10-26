import React from 'react';

const DynamicCard = ({ tabs, activeTab, onTabChange, content }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto my-6 p-6">

            {/* Tabs Navigation as Bookmarks */}
            <div className="flex justify-start space-x-4 relative mb-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(tab)}
                        className={`relative px-4 py-3 rounded-tl-lg text-center font-semibold text-dark-blue transition-all ${activeTab === tab
                                ? 'bg-yellow border-none '
                                : 'bg-gray-200 border-none'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Close Button */}
            <button className="absolute top-4 right-4 text-red bg-white h-4 text-2xl font-bold">&times;</button>

            {/* Dynamic Content */}
            <div className="border border-gray-200 rounded-lg p-6">
                {content}
            </div>
        </div>
    );
};

export default DynamicCard;
