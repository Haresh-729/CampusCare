const studentService = require('../../services/student/studentServices');
const path = require('path');
const fs = require('fs');

exports.uploadStudentData = async (req, res) => {
  try {
    // Make sure a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Define the file path
    const filePath = path.join(__dirname, '..', '..', 'uploads', req.file.filename);

    // Call the service function to insert the student data
    const students = await studentService.insertStudentsFromExcel(filePath);

    // Optionally delete the file after processing
    fs.unlinkSync(filePath);

    // Send a success response
    res.status(201).json({ message: 'Students data uploaded successfully', students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadParentData = async (req, res) => {
    try {
      // Make sure a file was uploaded
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      // Define the file path
      const filePath = path.join(__dirname, '..', '..', 'uploads', req.file.filename);
  
      // Call the service function to insert the student data
      const Parents = await studentService.insertParentsFromExcel(filePath);
  
      // Optionally delete the file after processing
      fs.unlinkSync(filePath);
  
      // Send a success response
      res.status(201).json({ message: 'Parents data uploaded successfully', Parents });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };