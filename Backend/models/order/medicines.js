module.exports = (sequelize, DataTypes) => {
    const Medicines = sequelize.define('Medicines', {
      medicine_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Medicine name, required field
      },
      power: {
        type: DataTypes.STRING,
        allowNull: false, // Power or strength of the medicine (e.g., 500mg)
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false, // Key ingredients or contents of the medicine
      },
      cures: {
        type: DataTypes.STRING,
        allowNull: false, // Conditions or diseases the medicine cures
      },
      availability: {
        type: DataTypes.ENUM('easily', 'medium', 'hard'),
        allowNull: false, // Availability of the medicine: 'easily', 'medium', or 'hard'
      },
      added_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // References the Users table
          key: 'user_id',
        },
        onDelete: 'SET NULL', // Set to NULL if the user (doctor) who added it is deleted
      },
    });
  
    return Medicines;
  };
  