module.exports = (sequelize, DataTypes) => {
    const HospitalCheckupReminder = sequelize.define('HospitalCheckupReminder', {
      hcr_id: {
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
      type: {
        type: DataTypes.ENUM('student', 'staff'), // Type of user receiving the reminder
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false, // The message for the reminder
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
  
    return HospitalCheckupReminder;
  };
  