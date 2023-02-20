const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../product.json'); 
const swaggerDocument1 = require('../user.json');
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.get('/api-docs', swaggerUi.setup(swaggerDocument1));

module.exports = router;