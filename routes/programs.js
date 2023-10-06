const express = require('express');
const router = express.Router();
const programsController = require('../controllers/programs');

// Route to GET call in controller
router.get('/programs', programsController.getPrograms);