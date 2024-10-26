module.exports = (sequelize, DataTypes) => {
    const Emergency = sequelize.define('Emergency', {
      emergency_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // References the Users table (Students/Patients)
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      ambulance_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Initially NULL until an ambulance is assigned
        references: {
          model: 'Ambulances',
          key: 'ambulance_id',
        },
        onDelete: 'SET NULL',
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Initially NULL until a hospital is assigned
        references: {
          model: 'Hospitals',
          key: 'hospital_id',
        },
        onDelete: 'SET NULL',
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false, // Hospital staff (admin) who creates the emergency
        references: {
          model: 'Users', // User table, hostel hospital staff user ID
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.ENUM('initiated', 'ambulance_assigned', 'hospital_assigned', 'completed'),
        defaultValue: 'initiated',
        allowNull: false,
      },
      symptoms: {
        type: DataTypes.TEXT,
        allowNull: false, // Description of symptoms causing the emergency
      },
      estimated_arrival_time: {
        type: DataTypes.DATE,
        allowNull: true, // Time ambulance is estimated to arrive at the hospital
      },
    });
  
    return Emergency;
  };
  