import React, { useEffect, useState } from 'react';
import DynamicCard from '../../utils/DynamicCard';

const sampleAppointments = [
  { id: '0544', date: '24-10-2024', type: 'Custom', name: 'Manas Jagtap', time: '10:00-11:00', doctor: 'Dr. Smith', actions: 'Acknowledge' },
  { id: '0545', date: '24-10-2024', type: 'Custom', name: 'Tanvi Kinjele', time: '12:00-13:00', doctor: 'Dr. Doe', actions: 'Acknowledge' },
  { id: '0546', date: '24-10-2024', type: 'Custom', name: 'Amir Noori', time: '14:00-15:00', doctor: 'Dr. Brown', actions: 'Acknowledge' },
  { id: '0547', date: '24-10-2024', type: 'General', name: 'Haresh Kurade', time: '16:00-17:00', doctor: 'Dr. Clark', actions: 'Acknowledge' },
];

const sampleScheduled = [
  { id: '0548', date: '25-10-2024', type: 'Follow-up', name: 'Advait Rout', time: '10:00-11:00', doctor: 'Dr. Smith', symptoms: 'Fever', description: 'Mild fever for 3 days', actions: 'Reschedule' },
];

const samplePrescript = [
  { id: '0549', date: '24-10-2024', type: 'Custom', name: 'Kashyap Singh', time: '09:00-10:00', doctor: 'Dr. Smith', prescription: [{ medical: 'Paracetamol', frequency: '2x', dosage: '500mg', duration: '3 days' }] },
];

const sampleHistory = [
  { id: '0549', date: '24-10-2024', type: 'Custom', name: 'Kashyap Singh', time: '09:00-10:00', doctor: 'Dr. Smith', prescription: [{ medical: 'Paracetamol', frequency: '2x', dosage: '500mg', duration: '3 days' }, { medical: 'Ibuprofen', frequency: '1x', dosage: '200mg', duration: '5 days' }] },
];

const AdminAppointment = () => {
  const [activeTab, setActiveTab] = useState('New');
  const [details, setDetails] = useState(null);
  const [reschedule, setReschedule] = useState(false);

  const tabs = ['New', 'Scheduled', 'Prescript', 'History'];

  useEffect(() => {
    setDetails(null);
    setReschedule(false);
  }, [activeTab]);

  const renderAppointmentTable = (appointments) => (
    <table className="w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr className="bg-yellow text-left text-white">
          <th className="p-4">ID</th>
          <th>Date</th>
          <th>Type</th>
          <th>Name</th>
          <th>Time Slot</th>
          <th>Doctor</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((apt, index) => (
          <tr key={index} className="text-gray-700 border-b hover:bg-gray-100">
            <td className="p-4">{apt.id}</td>
            <td>{apt.date}</td>
            <td>{apt.type}</td>
            <td>{apt.name}</td>
            <td>{apt.time}</td>
            <td>{apt.doctor}</td>
            <td>
              <button className="bg-yellow text-dark-blue text-sm p-1 rounded-lg" onClick={() => setDetails(apt)}>Details</button>
              {apt.actions === 'Acknowledge' && <button className="bg-green text-white text-sm p-1 rounded-lg ml-2">{apt.actions}</button>}
              {apt.actions === 'Reschedule' && <button className="bg-dark-blue text-yellow text-sm p-1 rounded-lg ml-2" onClick={() => [setDetails(apt), setReschedule(true)]}>{apt.actions}</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderPrescriptionTable = (prescriptions) => (
    <table className="w-full bg-white rounded-lg shadow-lg mt-4">
      <thead>
        <tr className="bg-dark-blue text-left text-white">
          <th className="p-4">Medicine</th>
          <th>Frequency</th>
          <th>Dosage</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {prescriptions.map((prescription, index) => (
          <tr key={index} className="text-gray-700 border-b hover:bg-gray-100">
            <td className="p-4">{prescription.medical}</td>
            <td>{prescription.frequency}</td>
            <td>{prescription.dosage}</td>
            <td>{prescription.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderDetailsCard = (appointment) => (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className='flex justify-between items-center'>
        <h2 className="text-xl text-dark-blue font-bold mb-4">Appointment Details</h2>
        <p className="text-red border-none cursor-pointer" onClick={() => [setDetails(null), setReschedule(false)]}>X</p>
      </div>
      <p className="text-red"><strong className="text-dark-blue">ID:</strong> {appointment.id}</p>
      <p className="text-red"><strong className="text-dark-blue">Date:</strong> {appointment.date}</p>
      <p className="text-red"><strong className="text-dark-blue">Type:</strong> {appointment.type}</p>
      <p className="text-red"><strong className="text-dark-blue">Name:</strong> {appointment.name}</p>
      <p className="text-red"><strong className="text-dark-blue">Doctor:</strong> {appointment.doctor}</p>
      <p className="text-red"><strong className="text-dark-blue">Time Slot:</strong> {appointment.time}</p>

      {appointment.prescription && (
        <>
          <p className="text-red"><strong className='text-dark-blue'>Prescription:</strong></p>
          {renderPrescriptionTable(appointment.prescription)}
        </>
      )}

      {appointment.symptoms && (
        <>
          <p className="text-red"><strong className='text-dark-blue'>Symptoms:</strong> {appointment.symptoms}</p>
          {!reschedule && <p className="text-red"><strong className="text-dark-blue">Description:</strong> {appointment.description}</p>}
        </>
      )}

      {reschedule && (
        <div className="mt-4">
          <p className="font-semibold mb-2 text-dark-blue">Available Time Slots:</p>
          <select className="bg-yellow text-dark-blue border rounded-md p-2 w-full mb-4">
            <option>10:30am - 11:30am</option>
            <option>12:00pm - 12:30pm</option>
            <option>3:30pm - 5:00pm</option>
            <option>6:00pm - 6:30pm</option>
            <option>9:30am - 10:30am</option>
          </select>
          <button className="bg-green text-white p-2 rounded-lg">Save</button>
          <button className="bg-red text-white p-2 rounded-lg ml-4">Cancel</button>
        </div>
      )}
    </div>
  );

  const content = (
    <div>
      {(!details && !reschedule) && <div className="flex justify-between items-center mb-4">
        <input type="date" className="bg-dark-blue text-white border rounded-md p-2" defaultValue="2024-10-24" />
        <select className="bg-dark-blue text-white border p-2 rounded-md">
          <option>Select ID</option>
          {sampleAppointments.map((apt) => (
            <option key={apt.id}>{apt.id}</option>
          ))}
        </select>
        <button className="bg-yellow text-dark-blue p-2 rounded-lg">Search</button>
      </div>}

      {(activeTab === 'New' && !details && !reschedule) && renderAppointmentTable(sampleAppointments)}
      {(activeTab === 'Scheduled' && !details && !reschedule) && renderAppointmentTable(sampleScheduled)}
      {(activeTab === 'Prescript' && !details && !reschedule) && renderAppointmentTable(samplePrescript)}
      {(activeTab === 'History' && !details && !reschedule) && renderAppointmentTable(sampleHistory)}

      {details && renderDetailsCard(details)}
    </div>
  );

  return (
    <div className="p-8 w-full bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-dark-blue font-bold mb-6">Appointments</h1>
      <DynamicCard
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        content={content}
      />
    </div>
  );
};

export default AdminAppointment;
