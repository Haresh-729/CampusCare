const appointmentService = require('../../services/appointments/appointmentsServices');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentService.getAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const newAppointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await appointmentService.updateAppointment(req.params.id, req.body);
    if (!updatedAppointment[0]) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const result = await appointmentService.deleteAppointment(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await appointmentService.getAppointmentById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Confirm an appointment
exports.confirmAppointment = async (req, res) => {
  try {
    const result = await appointmentService.confirmAppointment(req.params.id);
    if (!result[0]) {
      return res.status(404).json({ error: 'Appointment not found or already confirmed' });
    }
    res.status(200).json({ message: 'Appointment confirmed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get appointments by user ID
exports.getAppointmentsByUserId = async (req, res) => {
  try {
    const appointments = await appointmentService.getAppointmentsByUserId(req.params.userId);
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ error: 'No appointments found for this user' });
    }
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
