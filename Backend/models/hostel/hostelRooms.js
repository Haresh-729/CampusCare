module.exports = (sequelize, DataTypes) => {
    const HostelRooms = sequelize.define('HostelRooms', {
      room_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      hostel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hostel', // References the Hostel table
          key: 'hostel_id',
        },
        onDelete: 'CASCADE',
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return HostelRooms;
  };
  