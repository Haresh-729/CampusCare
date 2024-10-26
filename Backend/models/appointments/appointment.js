module.exports = (sequelize, DataTypes) => {
    const Appointments = sequelize.define('Appointments', {
      appointment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // References the Users table
          key: 'user_id',
        },
        onDelete: 'CASCADE', // Deletes related appointments if the user is deleted
      },
      appointment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false, // Date of the appointment
      },
      slot: {
        type: DataTypes.STRING,
        allowNull: false, // Time slot for the appointment (e.g., "10:00-11:00 AM")
      },
      doctor_type: {
        type: DataTypes.STRING,
        allowNull: false, // Type of doctor required (e.g., "General Physician", "Specialist")
      },
      symptoms: {
        type: DataTypes.TEXT,
        allowNull: true, // Description of symptoms provided by the user
      },
      doctor_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // References the Users table for the doctor
          key: 'user_id',
        },
        onDelete: 'SET NULL', // Set to NULL if the doctor is deleted
      },
      is_confirmed: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return Appointments;
  };
  