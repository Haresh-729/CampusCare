module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
      payment_id: {
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
        onDelete: 'CASCADE', // Deletes payment if the associated order is deleted
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Default to active
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false, // Unique transaction identifier
      },
      status: {
        type: DataTypes.ENUM('success', 'failed'),
        allowNull: false, // Status of the payment
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false, // Amount of the payment
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false, // Payment method used (e.g., 'Credit Card', 'PayPal')
      },
    });
  
    return Payment;
  };
  