const {check} = require('express-validator');
const validateResults = require('../utils/handlerValidators');

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    check("barcode")
    .exists(),
    check("sku")
    .exists(),
    (req, res, next) => { 
        return validateResults(req, res, next)
    }
]

const validatorCreateItem = [
    check("barcode")
    .exists(),
    check("sku")
    .exists(),
    check("name")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("price")
    .exists()
    .notEmpty(),
    check("cost")
    .exists(),
    check("category")
    .exists()
    .notEmpty()
    .isMongoId(),
    check("stock")
    .exists()
    .notEmpty(),
    check("imageProduct")
    .exists()
    .isMongoId(),
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