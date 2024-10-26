module.exports = (sequelize, DataTypes) => {
    const Tracking = sequelize.define('Tracking', {
      tracking_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders', // References the Orders table
          key: 'order_id',
        },
        onDelete: 'CASCADE', // Deletes tracking if the associated order is deleted
      },
      acknowledged: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // 0 if the order has not been accepted by hospital staff, 1 if it has
      },
      placed_order: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // 0 if the order hasn't been placed, 1 if it has
      },
      is_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // 0 if the medicine is not available in the hostel hospital, 1 if it is
      },
      medicine_arrived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // 0 if the medicine hasn't arrived, 1 if it has
      },
      delivered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // 0 if the medicine hasn't been delivered, 1 if it has
      },
      delivered_on: {
        type: DataTypes.DATE,
        allowNull: true, // Date when the medicine was delivered (can be null if not yet delivered)
      },
    });
  
    return Tracking;
  };
  