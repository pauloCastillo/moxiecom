const {check} = require('express-validator');
const validateResults = require('../utils/handlerValidators');

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => { 
        return validateResults(req, res, next)
    }
]

const validatorCreateItem = [
    check("title")
    .exists()
    .notEmpty(),
    (req, res, next) => { 
        return validateResults(req, res, next)
    }
]

const validatorUpdateItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorGetItem, validatorCreateItem, validatorUpdateItem }