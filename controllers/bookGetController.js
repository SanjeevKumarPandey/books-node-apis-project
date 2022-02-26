var bookModel = require('../models/bookModel');
const { validationResult } = require('express-validator');

exports.getBook = (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    bookModel.getBook(req, function(message){
        res.json(message);
    });
}