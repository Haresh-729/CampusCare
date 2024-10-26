const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const db = require('./models');
const userRoutes = require('./routes/user/userRoutes');
const appointmentRoutes = require('./routes/appointments/appointmentsRoutes');
const hostelRoutes = require('./routes/hostel/hostelRoutes');
const hospitalRoutes = require('./routes/hospital/hospitalRoutes');
const studentRoutes = require('./routes/student/studentRoutes');


const app = express();


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/user/*.js', './routes/appointments/*.js', './routes/hostel/*.js', './routes/hospital/*.js','./routes/student/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API. Use /api-docs for Swagger documentation.');
});
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/hostels', hostelRoutes);   
app.use('/api/hospitals', hospitalRoutes); 
app.use('/api/students', studentRoutes);

// Sync Database
db.sequelize.sync().then(() => { //{ alter: true } force: true - drop existing and create new; alter: true - make changes without deleting the data
  console.log('Database connected!');
}).catch((error) => {
  console.log('Error connecting to the database', error);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
