const express = require('express');
const habitController = require('../controllers/habitController');
const router = express.Router();

router.get('/', habitController.getAllHabits);
router.get('/habits/:id', habitController.getHabitDetail);
router.post('/habits', habitController.createHabit);
router.post('/habits/:id/update-status', habitController.updateHabitStatus);
router.post('/habits/:id/update-name', habitController.updateHabitName);
router.post('/habits/:id/delete', habitController.deleteHabit);

module.exports = router;
