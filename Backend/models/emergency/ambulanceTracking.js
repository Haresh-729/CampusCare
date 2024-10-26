module.exports = (sequelize, DataTypes) => {
    const AmbulanceTracking = sequelize.define('AmbulanceTracking', {
      at_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      emergency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Emergency',
          key: 'emergency_id',
        },
        onDelete: 'CASCADE',
      },
      ambulance_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Ambulances',
          key: 'ambulance_id',
        },
        onDelete: 'CASCADE',
      },
      location: {
        type: DataTypes.GEOMETRY('POINT'), // Point datatype to track ambulance's GPS location
        allowNull: false,
      },
      updated_on: {
        type: DataTypes.DATE,
        allowNull: false, // When the location was last updated
      },
      created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Timestamp when tracking started
        allowNull: false,
      },
    });
  
    return AmbulanceTracking;
  };
  