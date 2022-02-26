const express = require('express');
var bookGetController = require('../controllers/bookGetController');
const router = express.Router();
const userAuth = require('../middleware/checkAuth');

//validator
const {
    check,
    validationResult
} = require('express-validator');

const getValidator = [
    check('bookName').not().isEmpty().withMessage("Book name is needed"),
    //another validator here
]

router.get("/getbook/:bookName?", getValidator, bookGetController.getBook);

module.exports = router;