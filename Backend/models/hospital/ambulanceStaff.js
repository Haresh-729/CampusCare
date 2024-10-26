module.exports = (sequelize, DataTypes) => {
    const AmbulanceStaff = sequelize.define('AmbulanceStaff', {
      amb_staff_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospital', // References the Hospital table
          key: 'hospital_id',
        },
        onDelete: 'CASCADE', // Deletes related staff if the hospital is deleted
      },
      ambulance_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Ambulance', // References the Ambulance table
          key: 'ambulance_id',
        },
        onDelete: 'CASCADE', // Deletes related staff if the ambulance is deleted
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shift: {
        type: DataTypes.ENUM('morning', 'evening'), // Shift type
        allowNull: false,
      },
      is_driver: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE, // Date of birth
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return AmbulanceStaff;
  };
  