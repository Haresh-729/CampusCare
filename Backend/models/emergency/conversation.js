module.exports = (sequelize, DataTypes) => {
    const Conversation = sequelize.define('Conversation', {
      conversation_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      is_hospital: {
        type: DataTypes.BOOLEAN,
        allowNull: false, // Whether the conversation is hospital-related (0 or 1)
      },
      hospital_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Nullable if it's not a hospital-related conversation
        references: {
          model: 'Hospitals',
          key: 'hospital_id',
        },
        onDelete: 'SET NULL',
      },
    });
  
    return Conversation;
  };
  