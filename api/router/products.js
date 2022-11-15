const {Router} = require('express');
const router = Router()
const { validatorGetItem, 
        validatorCreateItem, 
        validatorUpdateItem
} = require('../validators/categories');

const { getItems, 
        getItem, 
        createItem, 
        updateItem, 
        deleteItem 
} = require('../controllers/products');

router.route('/')
.get(getItems)
.post(validatorCreateItem, createItem);

router.route('/:id')
.get(validatorGetItem, getItem)
.put(validatorUpdateItem, updateItem)
.delete(deleteItem);

module.exports = router