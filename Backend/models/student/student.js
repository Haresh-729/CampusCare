module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      sap_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true, // Assuming sap_id is unique for each student
        validate: {
          len: [12, 12], // Ensure it's exactly 12 digits
        },
      },
      roll_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true, // Ensure it's numeric
        },
      },
      email_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure email is unique
        validate: {
          isEmail: true, // Ensure it's a valid email format
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dept_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Department', // References the Department table
          key: 'dept_id',
        },
        onDelete: 'CASCADE',
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female', 'Other'), // Specify valid gender options
        allowNull: false,
      },
    });
  
    return Student;
  };
  