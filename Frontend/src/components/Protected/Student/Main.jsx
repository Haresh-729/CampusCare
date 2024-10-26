import React from 'react';

import { FaHeartbeat, FaUserMd, FaBriefcaseMedical } from 'react-icons/fa';

const Main = ({ healthData, recentRecords }) => {
  return (
    <main className="p-8 bg-gray-100">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-dark-blue mb-6">Dashboard</h1>
        <button className="bg-red text-white px-6 py-2 rounded-full border-none">Request Ambulance</button>
      </div>

      <section className="bg-gradient-to-r from-white to-yellow p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-black">Welcome to Your Health Dashboard!</h2>
        <p className="text-black font-light">
          We're here to support your health and well-being every step of the way. Explore your dashboard to easily access all your healthcare services.
        </p>
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="w-full min-h-[95px] bg-white rounded-lg shadow-md flex items-center p-4 gap-4">
          <div>
            <FaHeartbeat className="text-dark-blue text-4xl" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-gray-500 text-lg font-semibold">Heart Rate</h3>
            <p className="text-dark-blue text-2xl font-bold">{healthData.heartRate} Beats/min</p>
          </div>
        </div>

        <div className="w-full min-h-[95px] bg-white rounded-lg shadow-md flex items-center p-4 gap-4">
          <div>
            <FaUserMd className="text-dark-blue text-4xl" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-gray-500 text-lg font-semibold">Blood Pressure</h3>
            <p className="text-dark-blue text-2xl font-bold">{healthData.bloodPressure}</p>
          </div>
        </div>

        <div className="w-full min-h-[95px] bg-white rounded-lg shadow-md flex items-center p-4 gap-4">
          <div>
            <FaBriefcaseMedical className="text-dark-blue text-4xl" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-gray-500 text-lg font-semibold">Blood Sugar</h3>
            <p className="text-dark-blue text-2xl font-bold">{healthData.bloodSugar} mmHg</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <button className="hover:border-gray-300 bg-white text-dark-blue p-4 rounded-lg shadow-md text-center">Order Next Medications</button>
        <button className="hover:border-gray-300 bg-white text-dark-blue p-4 rounded-lg shadow-md text-center">Isolation Status</button>
        <button className="hover:border-gray-300 bg-white text-dark-blue p-4 rounded-lg shadow-md text-center">Hospitalization Records</button>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Recent Health Records</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 text-gray-700">Date</th>
              <th className="p-2 text-gray-700">Check-Up Type</th>
              <th className="p-2 text-gray-700">Doctor/Facility</th>
              <th className="p-2 text-gray-700">Results</th>
              <th className="p-2 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentRecords.map((record, index) => (
              <tr key={index} className="border-t border-gray-200 font-light text-black">
                <td className="p-2">{record.date}</td>
                <td className="p-2">{record.checkUpType}</td>
                <td className="p-2">{record.doctorFacility}</td>
                <td className="p-2">{record.results}</td>
                <td className="p-2">
                  <button className="bg-dark-blue text-yellow hover:underline border-none">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Main;
