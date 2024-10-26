const db = require('../../models');
const xlsx = require('xlsx');
const mailSender = require('../../services/mail/mailSender'); // Adjust the path to your mailSender utility
const loginDetailsTemplate = require('../../services/mail/mail/templates/LoginDetails'); // Import the email template

const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8); // Generates an 8-character random string
};

exports.insertStudentsFromExcel = async (filePath) => {
  try {
    // Read the Excel file
    const workbook = xlsx.readFile(filePath);
    const sheetName = 'students'; // Make sure the sheet is named 'students'
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet into JSON format
    const studentData = xlsx.utils.sheet_to_json(worksheet);

    // Insert each row into the database
    const insertedStudents = [];
    for (const student of studentData) {
      const newStudent = await db.Students.create({
        sap_id: student.sap_id,
        roll_no: student.roll_no,
        fname: student.fname,
        lname: student.lname,
        dob: student.dob,
        mobile: student.mobile,
        email_id: student.email_id,
        address: student.address,
        course: student.course,
        dept_id: student.dept_id,
        gender: student.gender
      });
      insertedStudents.push(newStudent);

      const username = student.email_id; // Assuming email is used as username
      const password = generateRandomPassword();

      const newUser = await db.User.create({
        uname: username,
        password: password, 
        sap_id: student.sap_id,
        ur_id: 2,
    });

    const emailBody = loginDetailsTemplate(username, password);
    await mailSender(username, 'Your Login Information', emailBody);
    }
    
    return insertedStudents;
  } catch (error) {
    throw new Error('Error inserting students from Excel: ' + error.message);
  }
};

exports.insertParentsFromExcel = async (filePath) => {
    try {
      // Read the Excel file
      const workbook = xlsx.readFile(filePath);
      const sheetName = 'parents'; // Ensure the sheet is named 'parents'
      const worksheet = workbook.Sheets[sheetName];
  
      // Convert the sheet into JSON format
      const parentData = xlsx.utils.sheet_to_json(worksheet);
  
      // Insert each row into the database
      const insertedParents = [];
      for (const parent of parentData) {
        const newParent = await db.Parents.create({
          fname: parent.fname,
          lname: parent.lname,
          type: parent.type, // Assuming 0 = Father, 1 = Mother
          mobile: parent.mobile,
          email: parent.email,
          occupation: parent.occupation,
          income: parent.income,
          address: parent.address,
          sap_id: parent.sap_id, // References the Student SAP ID
        });
        insertedParents.push(newParent);
      }
  
      return insertedParents;
    } catch (error) {
      throw new Error('Error inserting parents from Excel: ' + error.message);
    }
  };
