const express = require('express');
const router = express.Router();

const userController = require('../controllers/product');

router.get('/', userController.getAll);

router.get('/:productId', userController.getProduct);

router.post('/', userController.create);

module.exports = router;