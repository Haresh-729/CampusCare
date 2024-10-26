module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define('Settings', {
      s_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      theme: {
        type: DataTypes.STRING,
        allowNull: true, // User-selected theme
      },
      disability: {
        type: DataTypes.STRING,
        allowNull: true, // Information about disabilities, if applicable
      },
    });
  
    return Settings;
  };
  