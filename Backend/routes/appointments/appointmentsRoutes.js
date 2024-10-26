const express = require('express');
const router = express.Router();
const appointmentController = require('../../controllers/appointments/appointmentsController');
const authenticateToken = require('../../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Appointment management
 */

/**
 * @swagger
 * /api/appointments/getAppointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 */
router.get('/getAppointments', authenticateToken, appointmentController.getAllAppointments);

/**
 * @swagger
 * /api/appointments/addAppointments:
 *   post:
 *     summary: Add a new appointment
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointment'
 *     responses:
 *       201:
 *         description: The appointment was successfully created
 */
router.post('/addAppointments', authenticateToken, appointmentController.createAppointment);

/**
 * @swagger
 * /api/appointments/updateAppointments/{id}:
 *   put:
 *     summary: Update an appointment
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointment'
 *     responses:
 *       200:
 *         description: The appointment was successfully updated
 */
router.put('/updateAppointments/:id', authenticateToken, appointmentController.updateAppointment);

/**
 * @swagger
 * /api/appointments/deleteAppointments/{id}:
 *   delete:
 *     summary: Delete an appointment
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment id
 *     responses:
 *       200:
 *         description: The appointment was successfully deleted
 */
router.delete('/deleteAppointments/:id', authenticateToken, appointmentController.deleteAppointment);

/**
 * @swagger
 * /api/appointments/getAppointment/{id}:
 *   get:
 *     summary: Get an appointment by id
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment id
 *     responses:
 *       200:
 *         description: The appointment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 */
router.get('/getAppointment/:id', authenticateToken, appointmentController.getAppointmentById);

/**
 * @swagger
 * /api/appointments/confirmAppointment/{id}:
 *   put:
 *     summary: Confirm an appointment
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment id
 *     responses:
 *       200:
 *         description: The appointment was successfully confirmed
 */
router.put('/confirmAppointment/:id', authenticateToken, appointmentController.confirmAppointment);

/**
 * @swagger
 * /api/appointments/getAppointmentsByUserId/{userId}:
 *   get:
 *     summary: Get appointments by user ID
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: A list of appointments for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 */
router.get('/getAppointmentsByUserId/:userId', authenticateToken, appointmentController.getAppointmentsByUserId);

module.exports = router;

