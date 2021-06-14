const express = require('express');
const itemController = require('../controllers/item');
const router = express.Router();

router.get('/', itemController.getItem);
router.post('/', itemController.createItem);

module.exports = router;