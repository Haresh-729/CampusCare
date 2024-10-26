const db = require('../models');

exports.getUsers = async () => {
  return await db.User.findAll();
};

exports.createUser = async (userData) => {
  return await db.User.create(userData);
};
