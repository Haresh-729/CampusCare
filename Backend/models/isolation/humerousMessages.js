module.exports = (sequelize, DataTypes) => {
    const HumorousMessages = sequelize.define('HumorousMessages', {
      hm_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text_message: {
        type: DataTypes.TEXT,
        allowNull: false, // The humorous message to be displayed to isolated students
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Timestamp for when the message was added
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    return HumorousMessages;
  };
  