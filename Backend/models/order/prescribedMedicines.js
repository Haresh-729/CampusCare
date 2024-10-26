module.exports = (sequelize, DataTypes) => {
    const PrescribedMedicines = sequelize.define('PrescribedMedicines', {
      pm_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Medicines', // References the Medicines table
          key: 'medicine_id',
        },
        onDelete: 'CASCADE', // Deletes related prescribed medicine if the medicine is deleted
      },
      appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Appointments', // References the Appointments table
          key: 'appointment_id',
        },
        onDelete: 'CASCADE', // Deletes related prescribed medicine if the appointment is deleted
      },
      qty_to_consume: {
        type: DataTypes.INTEGER,
        allowNull: false, // Quantity of medicine to consume at a time (e.g., number of tablets)
      },
      morning: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes (medicine to be taken in the morning)
        allowNull: false,
        defaultValue: false,
      },
      afternoon: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes (medicine to be taken in the afternoon)
        allowNull: false,
        defaultValue: false,
      },
      night: {
        type: DataTypes.BOOLEAN, // 0 for No, 1 for Yes (medicine to be taken at night)
        allowNull: false,
        defaultValue: false,
      },
      total_weeks: {
        type: DataTypes.INTEGER,
        allowNull: false, // Total number of weeks the medicine should be taken
      },
      is_active: {
        type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
        allowNull: false,
        defaultValue: true, // Default to active
      },
    });
  
    return PrescribedMedicines;
  };
  