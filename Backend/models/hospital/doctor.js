module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    doctor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    hospital_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hospitals', // References the Hospital table
        key: 'hospital_id',
      },
      onDelete: 'CASCADE', // If the hospital is deleted, delete the doctor
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users', // References the Users table (for admin/user who added the doctor)
        key: 'user_id',
      },
      onDelete: 'SET NULL', // Set to NULL if the user is deleted
    },
    availability_time_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    availability_time_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN, // 0 for inactive, 1 for active
      allowNull: false,
      defaultValue: true, // Default to active
    },
  });

  return Doctor;
};
