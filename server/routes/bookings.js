const express = require('express');
const router = express.Router();
const { bookEvent, confirmBooking, getMyBookings, cancelBooking } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const { bookEventRules } = require('../middleware/validators/bookingValidator');

router.post('/', protect, bookEventRules, validate, bookEvent);
router.put('/:id/confirm', protect, admin, confirmBooking);
router.get('/my', protect, getMyBookings);
router.delete('/:id', protect, cancelBooking);

module.exports = router;
