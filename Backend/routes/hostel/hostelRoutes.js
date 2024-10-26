const express = require('express');
const router = express.Router();
const hostelController = require('../../controllers/hostel/hostelController');
const authenticateToken = require('../../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Hostels
 *   description: Hostel management
 */

/**
 * @swagger
 * /api/hostels/getHostels:
 *   get:
 *     summary: Get all hostels
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of hostels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hostel'
 */
router.get('/getHostels', authenticateToken, hostelController.getAllHostels);

/**
 * @swagger
 * /api/hostels/addHostels:
 *   post:
 *     summary: Add a new hostel
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hostel'
 *     responses:
 *       201:
 *         description: The hostel was successfully created
 */
router.post('/addHostels', authenticateToken, hostelController.createHostel);

/**
 * @swagger
 * /api/hostels/updateHostels/{id}:
 *   put:
 *     summary: Update a hostel
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The hostel id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hostel'
 *     responses:
 *       200:
 *         description: The hostel was successfully updated
 */
router.put('/updateHostels/:id', authenticateToken, hostelController.updateHostel);

/**
 * @swagger
 * /api/hostels/deleteHostels/{id}:
 *   delete:
 *     summary: Delete a hostel
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The hostel id
 *     responses:
 *       200:
 *         description: The hostel was successfully deleted
 */
router.delete('/deleteHostels/:id', authenticateToken, hostelController.deleteHostel);

/**
 * @swagger
 * /api/hostels/getHostel/{id}:
 *   get:
 *     summary: Get a hostel by id
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The hostel id
 *     responses:
 *       200:
 *         description: The hostel details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hostel'
 */
router.get('/getHostel/:id', authenticateToken, hostelController.getHostelById);

/**
 * @swagger
 * /api/hostels/rooms:
 *   get:
 *     summary: Get all rooms
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of rooms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */
router.get('/rooms', authenticateToken, hostelController.getAllRooms);

/**
 * @swagger
 * /api/hostels/addRooms:
 *   post:
 *     summary: Add a room
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       201:
 *         description: The room was successfully created
 */
router.post('/addRooms', authenticateToken, hostelController.createRoom);

/**
 * @swagger
 * /api/hostels/updateRooms/{id}:
 *   put:
 *     summary: Update a room
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The room id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: The room was successfully updated
 */
router.put('/updateRooms/:id', authenticateToken, hostelController.updateRoom);

/**
 * @swagger
 * /api/hostels/deleteRooms/{id}:
 *   delete:
 *     summary: Delete a room
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The room id
 *     responses:
 *       200:
 *         description: The room was successfully deleted
 */
router.delete('/deleteRooms/:id', authenticateToken, hostelController.deleteRoom);

/**
 * @swagger
 * /api/hostels/rooms/{id}:
 *   get:
 *     summary: Get a room by id
 *     tags: [Hostels]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The room id
 *     responses:
 *       200:
 *         description: The room details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 */
router.get('/rooms/:id', authenticateToken, hostelController.getRoomById);


module.exports = router;
