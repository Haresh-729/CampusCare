module.exports = (sequelize, DataTypes) => {
    const IsolationReminder = sequelize.define('IsolationReminder', {
      ir_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      isolation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Isolation', // References the Isolation table
          key: 'isolation_id',
        },
        onDelete: 'CASCADE',
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
      reminder_message: {
        type: DataTypes.TEXT,
        allowNull: false, // The message for the reminder
      },
      reminder_time: {
        type: DataTypes.DATE,
        allowNull: false, // When the reminder should be sent
      },
      status: {
        type: DataTypes.ENUM('pending', 'sent'),
        defaultValue: 'pending', // Status of the reminder
      },
    });
  
    return IsolationReminder;
  };
  