module.exports = (sequelize, DataTypes) => {
    const Ambulance = sequelize.define('Ambulance', {
      ambulance_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospitals', // References the Hospital table
          key: 'hospital_id',
        },
        onDelete: 'CASCADE', // Deletes related ambulances if the hospital is deleted
      },
      reg_no: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure registration numbers are unique
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_24_hrs: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_equiped: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
      },
      current_location: {
        type: DataTypes.GEOMETRY('POINT'), // Point data type for GPS coordinates
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('available', 'assigned', 'unavailable'), // Status of the ambulance
        allowNull: false,
        defaultValue: 'available', // Default status
      },
      location_fetched_on: {
        type: DataTypes.DATE,
        allowNull: true, // Optional timestamp for when the location was last fetched
      },
      is_active: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return Ambulance;
  };
  