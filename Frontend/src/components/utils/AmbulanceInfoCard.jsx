import React, { useState } from 'react';

const AmbulanceInfoCard = ({ ambulance }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Small Card (Summary) */}
      <div
        onClick={toggleCard}
        className="cursor-pointer bg-white shadow-lg rounded-lg p-4 flex justify-between items-center hover:shadow-xl transition-shadow duration-300 mb-4"
      >
        <div className="flex items-center">
          <img src={ambulance.image} alt={ambulance.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-bold text-avocado">{ambulance.name}</h2>
            <p className="text-sm text-gray-500">{ambulance.type}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-red font-semibold">{ambulance.operationalHours}</p>
          <p className="text-sm text-gray-500">{ambulance.capacity}</p>
        </div>
      </div>

      {/* Detailed Card (Expanded) */}
      {isExpanded && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto my-6">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-superiory-blue">Ambulance Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-400"><strong className="text-gray-700">Registration No.:</strong> {ambulance.registrationNo}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Equipped:</strong> {ambulance.equipped ? 'Yes' : 'No'}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Default Parking Location:</strong> {ambulance.parkingLocation}</p>
              <p className="text-gray-400"><strong className="text-gray-700">No. of Support Staff:</strong> {ambulance.supportStaff}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-superiory-blue">Driver Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {ambulance.drivers.map((driver, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg">
                  <img src={driver.image} alt={driver.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p><strong>{driver.name}</strong></p>
                    <p className="text-sm text-gray-500">License No.: {driver.licenseNo}</p>
                    <p className="text-sm text-gray-500">Shift: {driver.shift}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmbulanceInfoCard;
