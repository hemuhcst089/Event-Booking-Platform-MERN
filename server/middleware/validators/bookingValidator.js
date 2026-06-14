const { body } = require('express-validator');
const Event = require('../../models/Event');

const bookEventRules = [
    body('eventId')
        .notEmpty().withMessage('eventId is required')
        .isMongoId().withMessage('Invalid eventId format'),
    body('seats')
        .optional()
        .isInt({ gt: 0 }).withMessage('seats must be a positive integer greater than 0')
        .custom(async (value, { req }) => {
            const seatsToBook = value !== undefined ? parseInt(value, 10) : 1;
            const eventId = req.body.eventId;
            
            // Only check if eventId looks valid to prevent crashing the DB call
            if (eventId && eventId.match(/^[0-9a-fA-F]{24}$/)) {
                const event = await Event.findById(eventId);
                if (event && seatsToBook > event.availableSeats) {
                    throw new Error('Seats cannot exceed available seats');
                }
            }
            return true;
        })
];

module.exports = {
    bookEventRules
};
