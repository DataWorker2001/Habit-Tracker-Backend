const express = require('express');
const mongoose = require('mongoose');
const habitRoutes = require('./routes/habitRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://Arpan2001:Arpan2023@cluster0.hciafyn.mongodb.net/habit_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Replace <username> and <password> with your actual MongoDB credentials

// Routes
app.use('/', habitRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
