module.exports = (sequelize, DataTypes) => {
    const Isolation = sequelize.define('Isolation', {
      isolation_id: {
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
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // True if the isolation is currently active
        allowNull: false,
      },
      level: {
        type: DataTypes.ENUM('basic', 'intermediate', 'critical'),
        allowNull: false, // Isolation level to determine the severity
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false, // Duration of isolation in days
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false, // The user (hospital staff) who created the isolation record
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
    });
  
    return Isolation;
  };
  