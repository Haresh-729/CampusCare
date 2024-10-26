const express = require('express');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

app.use('/api', userRoutes);

// Sync Database
db.sequelize.sync().then(() => { //{ alter: true } force: true - drop existing and create new; alter: true - make changes without deleting the data
  console.log('Database connected!');
}).catch((error) => {
  console.log('Error connecting to the database', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
