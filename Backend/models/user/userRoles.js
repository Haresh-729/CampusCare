module.exports = (sequelize, DataTypes) => {
    const UserRoles = sequelize.define('UserRoles', {
      ur_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return UserRoles;
  };
  