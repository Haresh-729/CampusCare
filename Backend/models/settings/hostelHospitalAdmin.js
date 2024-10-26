module.exports = (sequelize, DataTypes) => {
    const HostelHospitalAdminSettings = sequelize.define('HostelHospitalAdminSettings', {
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
      notify_if_appt: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Whether to notify about new appointments
      },
      notify_if_new_order: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Whether to notify about new orders
      },
    });
  
    return HostelHospitalAdminSettings;
  };
  