module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
      patient_id: {
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
        onDelete: 'CASCADE', // Deletes related patient record if the user is deleted
      },
      is_hospitalized: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
        defaultValue: false, // Default to not hospitalized
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'HostelRooms', // References the HostelRooms table
          key: 'room_id',
        },
        onDelete: 'SET NULL', // Set to NULL if the room is deleted
      },
      is_isolated: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
        defaultValue: false, // Default to not isolated
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // References the Users table
          key: 'user_id',
        },
        onDelete: 'SET NULL', // Set to NULL if the user is deleted
      },
      is_active: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return Patient;
  };
  