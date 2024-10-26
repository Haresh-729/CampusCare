const express = require('express');
const router = express.Router();
const studentController = require('../../controllers/student/studentController');
const multer = require('multer');

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

/**
 * @swagger
 * tags:
 *   name: students
 *   description: students management
 */

/**
 * @swagger
 * /api/students/uploadStudents:
 *   post:
 *     summary: Upload student data from an Excel file
 *     description: Upload an Excel file containing student data to insert it into the database.
 *     tags: [students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The Excel file to be uploaded.
 *     responses:
 *       200:
 *         description: The student data was uploaded successfully.
 *       400:
 *         description: Bad Request. Invalid file or data format.
 *       500:
 *         description: Server error.
 */
router.post('/uploadStudents', upload.single('file'), studentController.uploadStudentData);

/**
 * @swagger
 * /api/students/uploadParents:
 *   post:
 *     summary: Upload Parents data from an Excel file
 *     description: Upload an Excel file containing Parents data to insert it into the database.
 *     tags: [students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The Excel file to be uploaded.
 *     responses:
 *       200:
 *         description: The student data was uploaded successfully.
 *       400:
 *         description: Bad Request. Invalid file or data format.
 *       500:
 *         description: Server error.
 */
router.post('/uploadParents', upload.single('file'), studentController.uploadParentData);

module.exports = router;
