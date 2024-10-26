module.exports = (sequelize, DataTypes) => {
    const HospitalizedPatientStatus = sequelize.define('HospitalizedPatientStatus', {
      hps_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      hospitalized_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospitalized', // References the Hospitalized table
          key: 'hospitalized_id',
        },
        onDelete: 'CASCADE', // Deletes related status if the hospitalization record is deleted
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false, // Status of the patient (e.g., "Under Treatment", "Critical")
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // References the Users table
          key: 'user_id',
        },
        onDelete: 'SET NULL', // Set to NULL if the user who updated it is deleted
      },
      next_process: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field describing the next process (e.g., "Surgery", "Observation")
      },
      dosage: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field for dosage instructions if applicable
      },
      is_active: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return HospitalizedPatientStatus;
  };
  