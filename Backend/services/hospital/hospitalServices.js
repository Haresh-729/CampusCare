const db = require('../../models');


// Fetch all hospitals
exports.getHospitals = async () => {
  return await db.Hospital.findAll();
};

// Create a new hospital
exports.createHospital = async (hospitalData) => {
  return await db.Hospital.create(hospitalData);
};

// Update a hospital by hospitalId
exports.updateHospital = async (hospitalId, updatedData) => {
  return await db.Hospital.update(updatedData, {
    where: {
      hospital_id: hospitalId,
    },
  });
};

// Delete a hospital by hospitalId
exports.deleteHospital = async (hospitalId) => {
  return await db.Hospital.destroy({
    where: {
      hospital_id: hospitalId,
    },
  });
};

// Fetch a specific hospital by hospitalId
exports.getHospitalById = async (hospitalId) => {
  return await db.Hospital.findOne({
    where: {
      hospital_id: hospitalId,
    },
  });
};

// Fetch all doctors
exports.getDoctors = async () => {
  return await db.Doctor.findAll();
};

// Create a new doctor
exports.createDoctor = async (doctorData) => {
  return await db.Doctor.create(doctorData);
};

// Update a doctor by doctorId
exports.updateDoctor = async (doctorId, updatedData) => {
  return await db.Doctor.update(updatedData, {
    where: {
      doctor_id: doctorId,
    },
  });
};

// Delete a doctor by doctorId
exports.deleteDoctor = async (doctorId) => {
  return await db.Doctor.destroy({
    where: {
      doctor_id: doctorId,
    },
  });
};

// Fetch a specific doctor by doctorId
exports.getDoctorById = async (doctorId) => {
  return await db.Doctor.findOne({
    where: {
      doctor_id: doctorId,
    },
  });
};

// Fetch all ambulances
exports.getAmbulances = async () => {
  return await db.Ambulance.findAll();
};

// Create a new ambulance
exports.createAmbulance = async (ambulanceData) => {
  return await db.Ambulance.create(ambulanceData);
};

// Update ambulance by ambulanceId
exports.updateAmbulance = async (ambulanceId, updatedData) => {
  return await db.Ambulance.update(updatedData, {
    where: {
      id: ambulanceId,
    },
  });
};

// Delete ambulance by ambulanceId
exports.deleteAmbulance = async (ambulanceId) => {
  return await db.Ambulance.destroy({
    where: {
      id: ambulanceId,
    },
  });
};

// Fetch a specific ambulance by ambulanceId
exports.getAmbulanceById = async (ambulanceId) => {
  return await db.Ambulance.findOne({
    where: {
      id: ambulanceId,
    },
  });
};


// Fetch all ambulance staff
exports.getAmbulanceStaff = async () => {
  return await db.AmbulanceStaff.findAll();
};

// Create a new ambulance staff
exports.createAmbulanceStaff = async (staffData) => {
  return await db.AmbulanceStaff.create(staffData);
};

// Update ambulance staff by staffId
exports.updateAmbulanceStaff = async (staffId, updatedData) => {
  return await db.AmbulanceStaff.update(updatedData, {
    where: {
      id: staffId,
    },
  });
};

// Delete ambulance staff by staffId
exports.deleteAmbulanceStaff = async (staffId) => {
  return await db.AmbulanceStaff.destroy({
    where: {
      id: staffId,
    },
  });
};

// Fetch a specific ambulance staff by staffId
exports.getAmbulanceStaffById = async (staffId) => {
  return await db.AmbulanceStaff.findOne({
    where: {
      id: staffId,
    },
  });
};
