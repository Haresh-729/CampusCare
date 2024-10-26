module.exports = (sequelize, DataTypes) => {
    const StudentSettings = sequelize.define('StudentSettings', {
      set_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      s_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Settings', // References the Settings table
          key: 's_id',
        },
        onDelete: 'CASCADE',
      },
    });
  
    return StudentSettings;
  };
  