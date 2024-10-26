import React from 'react';
import HospitalInfoCard from './HospitalInfoCard';
import AmbulanceInfoCard from './AmbulanceInfoCard';
import AmbulanceImg from '../../assets/Dashboard/ambulance.svg';
import HospitalImg from '../../assets/Dashboard/hospital.svg';
import Driver1 from '../../assets/Dashboard/driver1.svg';
import Driver2 from '../../assets/Dashboard/driver2.svg';

const hospitalData = {
  name: 'Mumbai City General Hospital',
  type: 'General Hospital',
  availability: '24 Hrs',
  distance: '4.5km',
  image: HospitalImg,
  description: 'A full-service hospital providing comprehensive healthcare.',
  address: '123 Marine Drive, Mumbai, 400020',
  distanceFromHostel: '4500 meters',
  phone: '+91 022 9876 5432',
  email: 'hospital@example.com',
  specialties: ['Cardiology', 'Pediatrics', 'Trauma Care'],
  openingHours: '8:00 AM',
  closingHours: '10:00 PM',
  icuCapacity: 5,
  totalBeds: 100,
};

const ambulanceData = {
  name: 'Ambulance 1',
  type: 'ICU Ambulance',
  registrationNo: 'MH12AB1234',
  capacity: '4 passengers',
  operationalHours: '24 hours',
  equipped: true,
  parkingLocation: 'Near Gate 2',
  supportStaff: 2,
  image: AmbulanceImg, 
  drivers: [
    {
      name: 'Rajesh Kumar',
      licenseNo: 'MH2000190324',
      shift: 'Morning',
      image: Driver1, 
    },
    {
      name: 'Suresh Nair',
      licenseNo: 'MH2000108675',
      shift: 'Evening',
      image: Driver2, 
    },
  ],
};

const Example2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <HospitalInfoCard hospital={hospitalData} />
      <AmbulanceInfoCard ambulance={ambulanceData} />
    </div>
  );
};

export default Example2;
