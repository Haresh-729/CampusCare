import React, { useState } from 'react';

const HospitalInfoCard = ({ hospital }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        onClick={toggleCard}
        className="cursor-pointer bg-white shadow-lg rounded-lg p-4 flex justify-between items-center hover:shadow-xl transition-shadow duration-300 mb-4"
      >
        <div className="flex items-center">
          <img src={hospital.image} alt={hospital.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-bold text-avocado">{hospital.name}</h2>
            <p className="text-sm text-gray-500">{hospital.type}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-red font-semibold">{hospital.availability}</p>
          <p className="text-sm text-gray-500">{hospital.distance}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto my-6">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-superiory-blue">Location Details</h3>
            <p className="text-gray-700">{hospital.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <p className="text-gray-400"><strong className="text-gray-700">Address:</strong> {hospital.address}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Distance from Hostel:</strong> {hospital.distanceFromHostel}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Phone:</strong> {hospital.phone}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Email:</strong> {hospital.email}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-superiory-blue">Facilities & Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {hospital.specialties.map((specialty, index) => (
                <span key={index} className="bg-yellow text-dark-blue py-1 px-2 rounded-full text-sm">{specialty}</span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-superiory-blue">Operational Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-400"><strong className="text-gray-700">Opening Hours:</strong> {hospital.openingHours}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Closing Hours:</strong> {hospital.closingHours}</p>
              <p className="text-gray-400"><strong className="text-gray-700">ICU Capacity:</strong> {hospital.icuCapacity}</p>
              <p className="text-gray-400"><strong className="text-gray-700">Total Beds:</strong> {hospital.totalBeds}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalInfoCard;
