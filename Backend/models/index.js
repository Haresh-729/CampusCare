const Sequelize = require('sequelize');
const config = require('../config/config.js');
const dbConfig = config.development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models (e.g., userModel)
db.User = require('./user/users.js')(sequelize, Sequelize);
db.UserRole = require('./user/userRoles.js')(sequelize, Sequelize);
db.Hostel = require('./hostel/hostel')(sequelize, Sequelize);
db.HostelRooms = require('./hostel/hostelRooms')(sequelize, Sequelize);
db.Hospital = require('./hospital/hospital')(sequelize, Sequelize);
db.Ambulance = require('./hospital/ambulance')(sequelize, Sequelize);
db.AmbulanceStaff = require('./hospital/ambulanceStaff')(sequelize, Sequelize);
db.Doctor = require('./hospital/doctor')(sequelize, Sequelize);
db.Appointments = require('./appointments/appointment')(sequelize, Sequelize);
db.AppointmentRemarks = require('./appointments/appointmentRemarks')(sequelize, Sequelize);

module.exports = db;
