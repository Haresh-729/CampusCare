module.exports = (sequelize, DataTypes) => {
    const AppointmentReminder = sequelize.define('AppointmentReminder', {
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
        onDelete: 'CASCADE',
      },
      reminder_message: {
        type: DataTypes.TEXT,
        allowNull: false, // The message for the reminder
      },
      status: {
        type: DataTypes.ENUM('pending', 'sent'),
        defaultValue: 'pending', // Status of the reminder
      },
      created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // When the reminder was created
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    return AppointmentReminder;
  };
  