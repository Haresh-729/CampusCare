module.exports = (sequelize, DataTypes) => {
    const Parents = sequelize.define('Parents', {
      parent_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.BOOLEAN, // 0 for father, 1 for mother
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true, // Ensure it's numeric
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true, // Ensure it's a valid email format
        },
      },
      occupation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      income: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sap_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Students', // References the Student table
          key: 'sap_id',
        },
        onDelete: 'CASCADE',
      },
    });
  
    return Parents;
  };
  