module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'UserRoles', // Refers to the UserRoles model
          key: 'ur_id',
        },
        onDelete: 'CASCADE',
      },
      uname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sap_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          len: [12, 12], // Ensure it's exactly 12 digits
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true, // Alphanumeric validation
        },
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // Self-referencing to the same Users table
          key: 'user_id',
        },
        onDelete: 'SET NULL',
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Users;
  };
  