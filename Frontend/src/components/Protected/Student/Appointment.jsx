import React, { useState } from 'react';
import DynamicCard from '../../utils/DynamicCard';

const sampleAppointments = [
    { id: 1, date: '28-10-2024', reason: 'General Checkup', status: 'New' },
    { id: 2, date: '20-10-2024', reason: 'Follow-up', status: 'Cancelled' },
    { id: 3, date: '18-09-2024', reason: 'Routine Exam', status: 'Completed' },
];

const upcomingAppointments = [
    { id: 4, date: '28-10-2024', reason: 'General Checkup', status: 'New' },
    { id: 5, date: '3-12-2024', reason: 'Routine Exam', status: 'New' },
]

const Appointment = () => {
    const [activeTab, setActiveTab] = useState("New");
    const [searchDate, setSearchDate] = useState("");

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Function to filter appointments by tab and date
    const filteredAppointments = sampleAppointments.filter(appointment => {
        if (activeTab === "New") {
            return appointment.status === "New" && (!searchDate || appointment.date === searchDate);
        }
        return appointment.status !== "New"; // For History tab (past or cancelled)
    });

    const tabs = ["New", "History"];

    const content = (
        <div>
            {/* Search by Date for New Appointments */}
            {activeTab === "New" && (
                <div className="mb-4 flex items-center gap-4">
                    <label htmlFor="searchDate" className="block text-dark-blue font-medium">Search by Date:</label>
                    <input
                        type="date"
                        id="searchDate"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                        className="border-none p-2 rounded bg-dark-blue text-yellow"
                    />
                </div>
            )}

            {/* Map through filtered appointments */}
            <div className="space-y-4">
                {filteredAppointments.map(appointment => (
                    <div key={appointment.id} className="bg-white p-4 rounded shadow">
                        <p className="text-lg font-semibold text-dark-blue">Date: {appointment.date}</p>
                        <p className="text-sm text-gray-400">Reason: {appointment.reason}</p>
                        <p className="text-sm text-gray-400">Status: {appointment.status}</p>
                    </div>
                ))}

                {/* If no appointments found */}
                {filteredAppointments.length === 0 && (
                    <p className="text-center text-gray-500">No appointments found</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="p-8 w-full bg-gray-100 min-h-screen">
            <h1 className="text-4xl text-dark-blue font-bold mb-6">Appointments</h1>
            <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
            {upcomingAppointments.map((appointment) => (
                <section
                    key={appointment.id}
                    className="flex flex-col w-full md:w-[50%] bg-gradient-to-r from-white to-yellow p-6 rounded-lg shadow-md mb-4"
                >
                    <div className="flex">
                        <h4 className="text-dark-blue">Upcoming Appointment: </h4>
                        <span className="text-avocado">{appointment.date}</span>
                    </div>
                    <div className="flex">
                        <h4 className="text-dark-blue">Reason: </h4>
                        <span className="text-avocado">{appointment.reason}</span>
                    </div>
                </section>
            ))}
            </div>

            {/* Pass necessary props to DynamicCard */}
            <DynamicCard
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                content={content}
            />
        </div>
    );
};

export default Appointment;
