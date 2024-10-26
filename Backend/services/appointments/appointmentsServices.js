const db = require('../../models');

// Fetch all appointments
exports.getAppointments = async () => {
  return await db.Appointments.findAll();
};

// Create a new appointment
exports.createAppointment = async (appointmentData) => {
  return await db.Appointments.create(appointmentData);
};

// Update an appointment by appointmentId
exports.updateAppointment = async (appointmentId, updatedData) => {
  return await db.Appointments.update(updatedData, {
    where: {
      appointment_id: appointmentId,
    },
  });
};

// Delete an appointment by appointmentId
exports.deleteAppointment = async (appointmentId) => {
  return await db.Appointments.destroy({
    where: {
      appointment_id: appointmentId,
    },
  });
};

// Fetch a specific appointment by appointmentId
exports.getAppointmentById = async (appointmentId) => {
  return await db.Appointments.findOne({
    where: {
      appointment_id: appointmentId,
    },
  });
};

// Confirm an appointment by appointmentId
exports.confirmAppointment = async (appointmentId) => {
  return await db.Appointments.update(
    { is_confirmed: true },  // Assuming there is an `is_confirmed` field in your model
    {
      where: {
        appointment_id: appointmentId,
      },
    }
  );
};

// Get appointments by user ID
exports.getAppointmentsByUserId = async (userId) => {
  return await db.Appointments.findAll({
    where: {
      user_id: userId,  // Assuming there's a `user_id` field in your Appointment model
    },
  });
};
