const hostelService = require('../../services/hostel/hostelServices');

exports.getAllHostels = async (req, res) => {
  try {
    const hostels = await hostelService.getHostels();
    res.status(200).json(hostels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createHostel = async (req, res) => {
  try {
    const newHostel = await hostelService.createHostel(req.body);
    res.status(201).json(newHostel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHostel = async (req, res) => {
  try {
    const updatedHostel = await hostelService.updateHostel(req.params.id, req.body);
    if (!updatedHostel[0]) {
      return res.status(404).json({ error: 'Hostel not found' });
    }
    res.status(200).json({ message: 'Hostel updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHostel = async (req, res) => {
  try {
    const result = await hostelService.deleteHostel(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Hostel not found' });
    }
    res.status(200).json({ message: 'Hostel deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHostelById = async (req, res) => {
  try {
    const hostel = await hostelService.getHostelById(req.params.id);
    if (!hostel) {
      return res.status(404).json({ error: 'Hostel not found' });
    }
    res.status(200).json(hostel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await hostelService.getHostelRooms(req.params.hostelId);
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const newRoom = await hostelService.createHostelRoom(req.body);
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await hostelService.updateHostelRoom(req.params.id, req.body);
    if (!updatedRoom[0]) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json({ message: 'Room updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const result = await hostelService.deleteHostelRoom(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await hostelService.getHostelRoomById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
