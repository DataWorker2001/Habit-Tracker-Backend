const Habit = require('../models/habit');

// Get all habits
exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.render('index', { habits }); // Render the index view with habits data
  } catch (error) {
    console.error('Error retrieving habits:', error);
    res.status(500).json({ message: 'Failed to retrieve habits' });
  }
};

// Get habit detail
exports.getHabitDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const habit = await Habit.findById(id);

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    habit.updateStreakAndTotalDays(); // Update streak and total days

    res.render('habitDetail', { habit }); // Render the habitDetail view with habit data
  } catch (error) {
    console.error('Error retrieving habit details:', error);
    res.status(500).json({ message: 'Failed to retrieve habit details' });
  }
};

// Create a new habit
exports.createHabit = async (req, res) => {
  try {
    const { name } = req.body;
    const habit = await Habit.create({ name });
    res.redirect('/'); // Redirect to the index page after habit creation
  } catch (error) {
    console.error('Error creating habit:', error);
    res.status(500).json({ message: 'Failed to create habit' });
  }
};

// Update habit status
exports.updateHabitStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { statuses, timings } = req.body;

    const habit = await Habit.findById(id);
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    const history = habit.history;
    const today = new Date().setHours(0, 0, 0, 0);

    for (let i = 0; i < 7; i++) {
      const date = new Date(today - i * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0);
      const index = history.findIndex((item) => item.date.getTime() === date);

      if (index !== -1) {
        // Update existing history entry
        history[index].status = statuses[i];
        history[index].timing = timings[i];
      } else {
        // Add new history entry
        history.push({ date: new Date(date), status: statuses[i], timing: timings[i] });
      }
    }

    habit.updateStreakAndTotalDays(); // Update streak and total days
    await habit.save();

    res.redirect(`/habits/${id}`); // Redirect to the habit detail page
  } catch (error) {
    console.error('Error updating habit status:', error);
    res.status(500).json({ message: 'Failed to update habit status' });
  }
};

// Update habit name
exports.updateHabitName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const habit = await Habit.findById(id);
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    habit.name = name;
    await habit.save();

    res.redirect(`/`); // Redirect to the index page
  } catch (error) {
    console.error('Error updating habit name:', error);
    res.status(500).json({ message: 'Failed to update habit name' });
  }
};

// Delete a habit
exports.deleteHabit = async (req, res) => {
  try {
    const { id } = req.params;

    const habit = await Habit.findByIdAndRemove(id);
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    res.redirect('/'); // Redirect to the index page
  } catch (error) {
    console.error('Error deleting habit:', error);
    res.status(500).json({ message: 'Failed to delete habit' });
  }
};
