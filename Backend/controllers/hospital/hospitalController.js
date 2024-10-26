const hospitalServices = require('../../services/hospital/hospitalServices');


exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await hospitalServices.getHospitals();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ error:error.message  });
  }
};

exports.createHospital = async (req, res) => {
  try {
    const newHospital = await hospitalServices.createHospital(req.body);
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHospital = async (req, res) => {
  try {
    const updatedHospital = await hospitalServices.updateHospital(req.params.id, req.body);
    if (!updatedHospital[0]) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json({ message: 'Hospital updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHospital = async (req, res) => {
  try {
    const result = await hospitalServices.deleteHospital(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHospitalById = async (req, res) => {
  try {
    const hospital = await hospitalServices.getHospitalById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await hospitalServices.getDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDoctor = async (req, res) => {
  try {
    const newDoctor = await hospitalServices.createDoctor(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await hospitalServices.updateDoctor(req.params.id, req.body);
    if (!updatedDoctor[0]) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const result = await hospitalServices.deleteDoctor(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await hospitalServices.getDoctorById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllAmbulances = async (req, res) => {
  try {
    const ambulances = await hospitalServices.getAmbulances();
    res.status(200).json(ambulances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAmbulance = async (req, res) => {
  try {
    const newAmbulance = await hospitalServices.createAmbulance(req.body);
    res.status(201).json(newAmbulance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAmbulance = async (req, res) => {
  try {
    const updatedAmbulance = await hospitalServices.updateAmbulance(req.params.id, req.body);
    if (!updatedAmbulance[0]) {
      return res.status(404).json({ error: 'Ambulance not found' });
    }
    res.status(200).json({ message: 'Ambulance updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAmbulance = async (req, res) => {
  try {
    const result = await hospitalServices.deleteAmbulance(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Ambulance not found' });
    }
    res.status(200).json({ message: 'Ambulance deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAmbulanceById = async (req, res) => {
  try {
    const ambulance = await hospitalServices.getAmbulanceById(req.params.id);
    if (!ambulance) {
      return res.status(404).json({ error: 'Ambulance not found' });
    }
    res.status(200).json(ambulance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAmbulanceStaff = async (req, res) => {
  try {
    const staff = await hospitalServices.getAmbulanceStaff();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAmbulanceStaff = async (req, res) => {
  try {
    const newStaff = await hospitalServices.createAmbulanceStaff(req.body);
    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAmbulanceStaff = async (req, res) => {
  try {
    const updatedStaff = await hospitalServices.updateAmbulanceStaff(req.params.id, req.body);
    if (!updatedStaff[0]) {
      return res.status(404).json({ error: 'Ambulance staff not found' });
    }
    res.status(200).json({ message: 'Ambulance staff updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAmbulanceStaff = async (req, res) => {
  try {
    const result = await hospitalServices.deleteAmbulanceStaff(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Ambulance staff not found' });
    }
    res.status(200).json({ message: 'Ambulance staff deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAmbulanceStaffById = async (req, res) => {
  try {
    const staff = await hospitalServices.getAmbulanceStaffById(req.params.id);
    if (!staff) {
      return res.status(404).json({ error: 'Ambulance staff not found' });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
