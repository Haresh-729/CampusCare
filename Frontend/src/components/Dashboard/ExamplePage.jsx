import React, { useState } from 'react';
import DynamicCard from './DynamicCard';

const tabs = ['Add Hospital', 'Create Admin', 'Add Ambulance'];

const ExamplePage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Content for each tab
  const tabContent = {
    'Add Hospital': (
      <>
        {/* General Information Section */}
        <h3 className="text-avocado font-bold mb-2">General Information</h3>
        <hr className="border-green-500 mb-4" />
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Enter Hospital Name..." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="text" placeholder="Enter Registration No...." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="text" placeholder="Short description of services..." className="w-full col-span-2 border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <select className="w-full col-span-2 border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue">
            <option>General</option>
            <option>Specialized</option>
            <option>Trauma</option>
          </select>
        </div>

        {/* Location Information Section */}
        <h3 className="text-avocado font-bold mb-2">Location Information</h3>
        <hr className="border-green-500 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Full address including postal code..." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="text" placeholder="Enter Landmark..." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="url" placeholder="Google Maps link..." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="text" placeholder="Enter distance in meters..." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="tel" placeholder="Enter Phone No...." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="tel" placeholder="Enter Emergency Phone No...." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="email" placeholder="Official email address...." className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
        </div>
      </>
    ),
    'Create Admin': (
      <>
        <h3 className="text-avocado font-bold mb-2">Create Admin</h3>
        <hr className="border-green-500 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Admin Name" className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="email" placeholder="Admin Email" className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
        </div>
      </>
    ),
    'Add Ambulance': (
      <>
        <h3 className="text-avocado font-bold mb-2">Add Ambulance Details</h3>
        <hr className="border-green-500 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Ambulance Registration Number" className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
          <input type="tel" placeholder="Driver Contact" className="w-full border rounded-lg p-3 bg-light-gray text-superiory-blue placeholder-superiory-blue" />
        </div>
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DynamicCard
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        content={tabContent[activeTab]}
      />
    </div>
  );
};

export default ExamplePage;
