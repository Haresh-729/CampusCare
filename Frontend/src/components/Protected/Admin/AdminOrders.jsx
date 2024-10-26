// AdminOrders.jsx
import React, { useState } from 'react';
import DynamicCard from '../../utils/DynamicCard';

const sampleOrders = [
  { id: '0544', trackingId: '01228', roomNo: '8', name: 'Manas Jagtap', items: '2', actions: 'Acknowledge' },
  { id: '0545', trackingId: '01229', roomNo: '18', name: 'Tanvi Kinjele', items: '3', actions: 'Acknowledge' },
  { id: '0546', trackingId: '01230', roomNo: '22', name: 'Amir Noori', items: '6', actions: 'Acknowledge' },
];

const AdminOrders = () => {
  const [activeTab, setActiveTab] = useState('Acknowledge');
  const tabs = ['Acknowledge', 'Order Batch', 'Delivery'];

  return (
    <div className="p-8 w-full bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-dark-blue font-bold mb-6">Orders</h1>

      <DynamicCard
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        content={
          <div>
            <div className="flex justify-between items-center mb-4">
              <input
                type="date"
                className="border rounded-md p-2"
                defaultValue="24-10-2024"
              />
              <select className="border p-2 rounded-md">
                <option>Select Order ID</option>
                {sampleOrders.map((order) => (
                  <option key={order.id}>{order.id}</option>
                ))}
              </select>
              <button className="bg-yellow p-2 rounded-lg">Search</button>
            </div>

            {/* Orders List */}
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-yellow text-left">
                  <th className="p-4">Order ID</th>
                  <th>Tracking ID</th>
                  <th>Hostel Room No.</th>
                  <th>Name</th>
                  <th>No. of Items</th>
                  <th>Actions</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {sampleOrders.map((order, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{order.id}</td>
                    <td>{order.trackingId}</td>
                    <td>{order.roomNo}</td>
                    <td>{order.name}</td>
                    <td>{order.items}</td>
                    <td>
                      <button className="bg-blue-500 text-white p-1 rounded-lg">Details</button>
                      <button className="bg-green-500 text-white p-1 rounded-lg ml-2">{order.actions}</button>
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
};

export default AdminOrders;
