module.exports = (sequelize, DataTypes) => {
    const Hostel = sequelize.define('Hostel', {
      hostel_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.BOOLEAN, // 0 for boys, 1 for girls
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // References the Users table
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      room_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Hostel;
  };
  