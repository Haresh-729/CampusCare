module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
      dept_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure department names are unique
      },
    });
  
    return Department;
  };
  