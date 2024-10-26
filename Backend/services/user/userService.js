const db = require('../../models');

exports.getUsers = async () => {
  return await db.User.findAll();
};

exports.createUser = async (userData) => {
  return await db.User.create(userData);
};

exports.updateUser = async (userId, updatedData) => {
  return await db.User.update(updatedData, {
    where: {
      user_id: userId,
    },
  });
};

exports.deleteUser = async (userId) => {
  return await db.User.destroy({
    where: {
      user_id: userId,
    },
  });
};

exports.getUserById = async (userId) => {
  return await db.User.findOne({
    where: {
      user_id: userId,
    },
  });
};

exports.getUserByUname = async (uname) => {
  return await db.User.findOne({
    where: {
      uname: uname,
    },
  });
};


exports.getUserByRole = async (ur_id) => {
  return await db.User.findAll({
    where: {
      ur_id: ur_id,
    },
  });
};