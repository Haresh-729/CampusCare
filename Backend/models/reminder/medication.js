module.exports = (sequelize, DataTypes) => {
    const MedicationReminder = sequelize.define('MedicationReminder', {
      mr_id: {
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
        onDelete: 'CASCADE',
      },
      medicine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Medicines', // References the Medicines table
          key: 'medicine_id',
        },
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.ENUM('pending', 'sent'),
        defaultValue: 'pending', // Status of the reminder
      },
      created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // When the reminder was created
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    return MedicationReminder;
  };
  