module.exports = (sequelize, DataTypes) => {
    const AppointmentRemarks = sequelize.define('AppointmentRemarks', {
      ar_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Appointments', // References the Appointments table
          key: 'appointment_id',
        },
        onDelete: 'CASCADE', // Deletes related remarks if the appointment is deleted
      },
      reason_of_infection: {
        type: DataTypes.TEXT,
        allowNull: false, // Explanation of the reason behind the infection
      },
      level: {
        type: DataTypes.ENUM('nominal', 'normal', 'medium', 'high', 'critical'),
        allowNull: false, // Severity level of the infection
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true, // Optional additional remarks from the doctor
      },
    }, {
      timestamps: false, // Disables default timestamps (createdAt, updatedAt)
    });
  
    return AppointmentRemarks;
  };
  