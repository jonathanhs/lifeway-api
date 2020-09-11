'use strict';

const express = require("express");
const router = express.Router();
const controller = require('../controllers/controllers.js');

// router list
router.get('/count/message', controller.count);

module.exports = router;
