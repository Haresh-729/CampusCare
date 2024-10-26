module.exports = (sequelize, DataTypes) => {
    const Hospital = sequelize.define('Hospital', {
      hospital_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      speciality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      added_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // References the Users table (for admin/user who added the hospital)
          key: 'user_id',
        },
        onDelete: 'SET NULL', // Set to NULL if the user is deleted
      },
      open_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      close_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      is_24_hrs: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
      },
      distance: {
        type: DataTypes.FLOAT, // Distance from hostel to hospital
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return Hospital;
  };
  