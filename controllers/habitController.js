const Habit = require('../models/habit');

exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.render('index', { habits });
  } catch (error) {
    console.error('Error retrieving habits:', error);
    res.status(500).json({ message: 'Failed to retrieve habits' });
  }
};

exports.getHabitDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const habit = await Habit.findById(id);

    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    habit.updateStreakAndTotalDays(); // Update streak and total days

    res.render('habitDetail', { habit });
  } catch (error) {
    console.error('Error retrieving habit details:', error);
    res.status(500).json({ message: 'Failed to retrieve habit details' });
  }
};

exports.createHabit = async (req, res) => {
  try {
    const { name } = req.body;
    const habit = await Habit.create({ name });
    res.redirect('/');
  } catch (error) {
    console.error('Error creating habit:', error);
    res.status(500).json({ message: 'Failed to create habit' });
  }
};

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
        history[index].status = statuses[i];
        history[index].timing = timings[i];
      } else {
        history.push({ date: new Date(date), status: statuses[i], timing: timings[i] });
      }
    }

    habit.updateStreakAndTotalDays();
    await habit.save();

    res.redirect(`/habits/${id}`);
  } catch (error) {
    console.error('Error updating habit status:', error);
    res.status(500).json({ message: 'Failed to update habit status' });
  }
};

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

    res.redirect(`/`);
  } catch (error) {
    console.error('Error updating habit name:', error);
    res.status(500).json({ message: 'Failed to update habit name' });
  }
};

exports.deleteHabit = async (req, res) => {
    try {
      const { id } = req.params;
  
      const habit = await Habit.findByIdAndRemove(id);
      if (!habit) {
        return res.status(404).json({ message: 'Habit not found' });
      }
  
      res.redirect('/');
    } catch (error) {
      console.error('Error deleting habit:', error);
      res.status(500).json({ message: 'Failed to delete habit' });
    }
  };
  
