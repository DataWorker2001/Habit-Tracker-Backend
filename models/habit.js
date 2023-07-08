const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  history: [
    {
      date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        enum: ['Done', 'Not Done', 'None'],
        default: 'None',
      },
      timing: {
        type: String,
        default: '',
      },
      streak: {
        type: Number,
        default: 0,
      },
    },
  ],
  longestStreak: {
    type: Number,
    default: 0,
  },
  totalDays: {
    type: Number,
    default: 0,
  },
});

habitSchema.methods.updateStreakAndTotalDays = function () {
  const sortedHistory = this.history.sort((a, b) => a.date - b.date);
  let streakCount = 0;
  let maxStreak = 0;
  let totalDays = 0;
  let prevDate = null;

  const today = new Date();
  const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // Calculate the last 7 days

  for (const entry of sortedHistory) {
    const currentDate = entry.date;
    const isConsecutiveDay = prevDate && prevDate.getTime() === currentDate.getTime() - 24 * 60 * 60 * 1000;

    if (entry.status === 'Done') {
      streakCount = isConsecutiveDay ? streakCount + 1 : 1;
      maxStreak = Math.max(maxStreak, streakCount);
    } else {
      streakCount = 0;
    }

    entry.streak = streakCount;

    prevDate = currentDate;

    if (currentDate >= last7Days && currentDate <= today) {
      totalDays++;
    }
  }

  this.longestStreak = maxStreak;
  this.totalDays = totalDays;
};

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
