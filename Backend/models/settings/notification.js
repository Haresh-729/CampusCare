module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
      n_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role: {
        type: DataTypes.ENUM('student', 'hostel_admin', 'hostel_hospital_admin', 'hospital_staff', 'ambulance_staff'), // Role type receiving notifications
        allowNull: false,
      },
      system: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indicates whether the notification is system-generated
      },
      custom: {
        type: DataTypes.TEXT,
        allowNull: true, // Custom notification message
      },
      isolation: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indicates if the notification is related to isolation
      },
      medicines: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indicates if the notification is related to medicines
      },
      appointment: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indicates if the notification is related to appointments
      },
      checkups: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Indicates if the notification is related to checkups
      },
    });
  
    return Notification;
  };
  