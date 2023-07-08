const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
const habitRoutes = require('./routes/habitRoutes');
// const habitController = require('./controllers/habitController');

// Create an instance of the Express app
const app = express();

// ...
function generateDatabaseName() {
  const uniqueId = Math.random().toString(36).substring(2, 15);
  return `habit_tracker_${uniqueId}`;
}



// ...

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Connect to the MongoDB database
mongoose.connect(`mongodb+srv://Arpan2001:Arpan2023@cluster0.hciafyn.mongodb.net/${generateDatabaseName()}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Replace <username> and <password> with your actual MongoDB credentials

// Routes
app.use('/', habitRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
