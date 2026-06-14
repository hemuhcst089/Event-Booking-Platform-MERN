const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(err => ({
            field: err.path || err.param, // Fallback for different express-validator versions
            message: err.msg
        }));

        return res.status(400).json({
            success: false,
            errors: formattedErrors
        });
    }
    next();
};

module.exports = { validate };
