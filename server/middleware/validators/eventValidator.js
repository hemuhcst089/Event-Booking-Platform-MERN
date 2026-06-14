const { body } = require('express-validator');

const createEventRules = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('date')
        .notEmpty().withMessage('Date is required')
        .isISO8601().withMessage('Date must be a valid date format')
        .custom((value) => {
            if (new Date(value) <= new Date()) {
                throw new Error('Date must be a valid future date');
            }
            return true;
        }),
    body('location').notEmpty().withMessage('Location is required'),
    body('totalSeats')
        .notEmpty().withMessage('totalSeats is required')
        .isInt({ gt: 0 }).withMessage('totalSeats must be a positive integer greater than 0'),
    body('ticketPrice')
        .optional()
        .isFloat({ min: 0 }).withMessage('Price must be greater than or equal to 0')
];

const updateEventRules = [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('date')
        .optional()
        .isISO8601().withMessage('Date must be a valid date format')
        .custom((value) => {
            if (new Date(value) <= new Date()) {
                throw new Error('Date must be a valid future date');
            }
            return true;
        }),
    body('location').optional().notEmpty().withMessage('Location cannot be empty'),
    body('totalSeats')
        .optional()
        .isInt({ gt: 0 }).withMessage('totalSeats must be a positive integer greater than 0'),
    body('ticketPrice')
        .optional()
        .isFloat({ min: 0 }).withMessage('Price must be greater than or equal to 0')
];

module.exports = {
    createEventRules,
    updateEventRules
};
