module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define('Messages', {
      m_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Conversation',
          key: 'conversation_id',
        },
        onDelete: 'CASCADE',
      },
      p_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Participants',
          key: 'p_id',
        },
        onDelete: 'CASCADE',
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false, // The actual message content
      },
      sent_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Timestamp when the message was sent
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    return Messages;
  };
  