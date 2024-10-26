module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
      order_id: {
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
        onDelete: 'CASCADE', // Deletes related orders if the user is deleted
      },
      medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Medicines', // References the Medicines table
          key: 'medicine_id',
        },
        onDelete: 'CASCADE', // Deletes related orders if the medicine is deleted
      },
      appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Appointment may be optional, so allow NULL
        references: {
          model: 'Appointments', // References the Appointments table
          key: 'appointment_id',
        },
        onDelete: 'CASCADE', // Deletes related orders if the appointment is deleted
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Default to active
      },
      level: {
        type: DataTypes.ENUM('nominal', 'normal', 'medium', 'high', 'critical'),
        allowNull: false, // Severity level of the condition
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false, // Number of days for which the dosage needs to be bought
      },
    });
  
    return Orders;
  };
  