module.exports = (sequelize, DataTypes) => {
    const Participants = sequelize.define('Participants', {
      p_id: {
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
      participant_type: {
        type: DataTypes.ENUM('hostel_hospital', 'ambulance_staff', 'hospital_staff', 'parent'),
        allowNull: false,
      },
      participant_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // User ID for the participant
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      created_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    });
  
    return Participants;
  };
  