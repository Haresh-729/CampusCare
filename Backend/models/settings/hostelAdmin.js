module.exports = (sequelize, DataTypes) => {
    const HostelAdminSettings = sequelize.define('HostelAdminSettings', {
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
      notify_if_emer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Whether to notify about emergencies
      },
    });
  
    return HostelAdminSettings;
  };
  