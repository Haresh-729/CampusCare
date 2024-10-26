const express = require('express');
const router = express.Router();
const hospitalController = require('../../controllers/hospital/hospitalController');
const authenticateToken = require('../../middlewares/authMiddleware');

/**
* @swagger
* tags:
*   name: Hospitals
*   description: API routes for managing hospitals, doctors, ambulances, and staff.
*/

/**
 * @swagger
 * /api/hospitals/getHospitals:
 *   get:
 *     summary: Get all hospitals
 *     tags: [Hospitals]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of hospitals
 */
router.get('/getHospitals', hospitalController.getAllHospitals);

/**
 * @swagger
 * /api/hospitals/addHospitals:
 *   post:
 *     summary: Add a new hospital
 *     tags: [Hospitals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "City Hospital"
 *               location:
 *                 type: string
 *                 example: "123 Main St"
 *               contact:
 *                 type: string
 *                 example: "123-456-7890"
 *     responses:
 *       201:
 *         description: Hospital added successfully
 */
router.post('/addHospitals', authenticateToken, hospitalController.createHospital);

/**
 * @swagger
 * /api/hospitals/updateHospitals/{id}:
 *   put:
 *     summary: Update a hospital
 *     tags: [Hospitals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Hospital Name"
 *               location:
 *                 type: string
 *                 example: "New Location"
 *               contact:
 *                 type: string
 *                 example: "987-654-3210"
 *     responses:
 *       200:
 *         description: Hospital updated successfully
 */
router.put('/updateHospitals/:id', authenticateToken, hospitalController.updateHospital);

/**
 * @swagger
 * /api/hospitals/deleteHospitals/{id}:
 *   delete:
 *     summary: Delete a hospital
 *     tags: [Hospitals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital ID
 *     responses:
 *       200:
 *         description: Hospital deleted successfully
 */
router.delete('/deleteHospitals/:id', authenticateToken, hospitalController.deleteHospital);

/**
 * @swagger
 * /api/hospitals/getHospitals/{id}:
 *   get:
 *     summary: Get a hospital by ID
 *     tags: [Hospitals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital ID
 *     responses:
 *       200:
 *         description: Hospital details retrieved successfully
 */
router.get('/getHospitals/:id', authenticateToken, hospitalController.getHospitalById);

/**
 * @swagger
 * /api/hospitals/getDoctors:
 *   get:
 *     summary: Get all doctors
 *     tags: [Doctors]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of doctors
 */
router.get('/getDoctors', authenticateToken, hospitalController.getAllDoctors);

/**
 * @swagger
 * /api/hospitals/addDoctors:
 *   post:
 *     summary: Add a new doctor
 *     tags: [Doctors]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dr. John Doe"
 *               specialty:
 *                 type: string
 *                 example: "Cardiologist"
 *               contact:
 *                 type: string
 *                 example: "123-456-7890"
 *     responses:
 *       201:
 *         description: Doctor added successfully
 */
router.post('/addDoctors', authenticateToken, hospitalController.createDoctor);

/**
 * @swagger
 * /api/hospitals/updateDoctors/{id}:
 *   put:
 *     summary: Update a doctor
 *     tags: [Doctors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Doctor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Doctor Name"
 *               specialty:
 *                 type: string
 *                 example: "Updated Specialty"
 *               contact:
 *                 type: string
 *                 example: "987-654-3210"
 *     responses:
 *       200:
 *         description: Doctor updated successfully
 */
router.put('/updateDoctors/:id', authenticateToken, hospitalController.updateDoctor);

/**
 * @swagger
 * /api/hospitals/deleteDoctors/{id}:
 *   delete:
 *     summary: Delete a doctor
 *     tags: [Doctors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Doctor deleted successfully
 */
router.delete('/deleteDoctors/:id', authenticateToken, hospitalController.deleteDoctor);

/**
 * @swagger
 * /api/hospitals/getDoctors/{id}:
 *   get:
 *     summary: Get a doctor by ID
 *     tags: [Doctors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Doctor details retrieved successfully
 */
router.get('/getDoctors/:id', authenticateToken, hospitalController.getDoctorById);

/**
 * @swagger
 * /api/hospitals/getAmbulances:
 *   get:
 *     summary: Get all ambulances
 *     tags: [Ambulances]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of ambulances
 */
router.get('/getAmbulances', authenticateToken, hospitalController.getAllAmbulances);

/**
 * @swagger
 * /api/hospitals/addAmbulances:
 *   post:
 *     summary: Add a new ambulance
 *     tags: [Ambulances]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *                 example: "Mercedes Sprinter"
 *               licensePlate:
 *                 type: string
 *                 example: "ABC-1234"
 *               driver:
 *                 type: string
 *                 example: "John Doe"
 *     responses:
 *       201:
 *         description: Ambulance added successfully
 */
router.post('/addAmbulances', authenticateToken, hospitalController.createAmbulance);

/**
 * @swagger
 * /api/hospitals/updateAmbulances/{id}:
 *   put:
 *     summary: Update an ambulance
 *     tags: [Ambulances]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Ambulance ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                 type: string
 *                 example: "Updated Model"
 *               licensePlate:
 *                 type: string
 *                 example: "XYZ-9876"
 *               driver:
 *                 type: string
 *                 example: "Jane Doe"
 *     responses:
 *       200:
 *         description: Ambulance updated successfully
 */
router.put('/updateAmbulances/:id', authenticateToken, hospitalController.updateAmbulance);

/**
 * @swagger
 * /api/hospitals/deleteAmbulances/{id}:
 *   delete:
 *     summary: Delete an ambulance by ID
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ambulance to be deleted
 *     responses:
 *       200:
 *         description: Ambulance deleted successfully
 *       404:
 *         description: Ambulance not found
 */
router.delete('/deleteAmbulances/:id', authenticateToken, hospitalController.deleteAmbulance);

/**
 * @swagger
 * /api/hospitals/getAmbulance/{id}:
 *   get:
 *     summary: Get ambulance by ID
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ambulance to retrieve
 *     responses:
 *       200:
 *         description: Ambulance data retrieved
 *       404:
 *         description: Ambulance not found
 */
router.get('/getAmbulance/:id', authenticateToken, hospitalController.getAmbulanceById);

/**
 * @swagger
 * /api/hospitals/getAmbulancestaffs:
 *   get:
 *     summary: Get all ambulance staff
 *     tags: [Ambulances]
 *     responses:
 *       200:
 *         description: List of all ambulance staff
 */
router.get('/getAmbulancestaffs', authenticateToken, hospitalController.getAllAmbulanceStaff);

/**
 * @swagger
 * /api/hospitals/addAmbulancestaff:
 *   post:
 *     summary: Add new ambulance staff
 *     tags: [Ambulances]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               contact:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ambulance staff created successfully
 *       400:
 *         description: Bad request
 */
router.post('/addAmbulancestaff', authenticateToken, hospitalController.createAmbulanceStaff);

/**
 * @swagger
 * /api/hospitals/updatAambulancestaff/{id}:
 *   put:
 *     summary: Update ambulance staff by ID
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ambulance staff to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               contact:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ambulance staff updated successfully
 *       404:
 *         description: Ambulance staff not found
 */
router.put('/updatAambulancestaff/:id', authenticateToken, hospitalController.updateAmbulanceStaff);

/**
 * @swagger
 * /api/hospitals/deleteAmbulancestaff/{id}:
 *   delete:
 *     summary: Delete ambulance staff by ID
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ambulance staff to delete
 *     responses:
 *       200:
 *         description: Ambulance staff deleted successfully
 *       404:
 *         description: Ambulance staff not found
 */
router.delete('/deleteAmbulancestaff/:id', authenticateToken, hospitalController.deleteAmbulanceStaff);

/**
 * @swagger
 * /api/hospitals/getAmbulancestaff/{id}:
 *   get:
 *     summary: Get ambulance staff by ID
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the ambulance staff to retrieve
 *     responses:
 *       200:
 *         description: Ambulance staff data retrieved
 *       404:
 *         description: Ambulance staff not found
 */
router.get('/getAmbulancestaff/:id', authenticateToken, hospitalController.getAmbulanceStaffById);


module.exports = router;
