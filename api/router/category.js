const express = require('express');
const router = express.Router()
const { validatorGetItem, 
        validatorCreateItem, 
        validatorUpdateItem
} = require('../validators/categories');

const {getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categories');

router.route('/')
.get(getCategories)
.post(validatorCreateItem, createCategory);

router.route('/:id')
.get(validatorGetItem, getCategory)
.put(validatorUpdateItem, updateCategory)
.delete(deleteCategory);

module.exports = router