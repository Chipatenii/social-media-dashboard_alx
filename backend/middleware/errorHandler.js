// errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging

    res.status(500).json({
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;
