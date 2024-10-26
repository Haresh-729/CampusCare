module.exports = (sequelize, DataTypes) => {
    const Hospitalized = sequelize.define('Hospitalized', {
      hospitalized_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Patients', // References the Patient table
          key: 'patient_id',
        },
        onDelete: 'CASCADE', // Deletes related record if the patient is deleted
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospitals', // References the Hospital table
          key: 'hospital_id',
        },
        onDelete: 'CASCADE', // Deletes related record if the hospital is deleted
      },
      hospitalized_on: {
        type: DataTypes.DATE,
        allowNull: false, // Date the patient was hospitalized
      },
      discharge_on: {
        type: DataTypes.DATE,
        allowNull: true, // Date the patient was discharged (nullable)
      },
      is_recovered: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes
        allowNull: false,
        defaultValue: false, // Default is not recovered
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false, // Reason for hospitalization
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true, // Additional remarks or notes (nullable)
      },
    });
  
    return Hospitalized;
  };
  