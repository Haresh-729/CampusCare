const db = require('../../models');

// Fetch all hostels
exports.getHostels = async () => {
  return await db.Hostel.findAll();
};

// Create a new hostel
exports.createHostel = async (hostelData) => {
  return await db.Hostel.create(hostelData);
};

// Update hostel details by hostelId
exports.updateHostel = async (hostelId, updatedData) => {
  return await db.Hostel.update(updatedData, {
    where: {
      id: hostelId,
    },
  });
};

// Delete a hostel by hostelId
exports.deleteHostel = async (hostelId) => {
  return await db.Hostel.destroy({
    where: {
      id: hostelId,
    },
  });
};

// Fetch a specific hostel by hostelId
exports.getHostelById = async (hostelId) => {
  return await db.Hostel.findOne({
    where: {
      id: hostelId,
    },
  });
};


// Fetch all rooms in a hostel
exports.getHostelRooms = async (hostelId) => {
  return await db.HostelRoom.findAll({
    where: {
      hostelId: hostelId,
    },
  });
};

// Create a new room in a specific hostel
exports.createHostelRoom = async (hostelRoomData) => {
  return await db.HostelRoom.create(hostelRoomData);
};

// Update room details by roomId
exports.updateHostelRoom = async (roomId, updatedData) => {
  return await db.HostelRoom.update(updatedData, {
    where: {
      id: roomId,
    },
  });
};

// Delete a hostel room by roomId
exports.deleteHostelRoom = async (roomId) => {
  return await db.HostelRoom.destroy({
    where: {
      id: roomId,
    },
  });
};

// Fetch a specific room by roomId
exports.getHostelRoomById = async (roomId) => {
  return await db.HostelRoom.findOne({
    where: {
      id: roomId,
    },
  });
};

