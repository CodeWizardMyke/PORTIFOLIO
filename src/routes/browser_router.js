const express = require('express');
const router = express.Router();

const browser_controller = require('../controllers/browser_controller');

router.get('/', browser_controller.index);
router.get('/browser', browser_controller.index);
router.get('/profile', browser_controller.about);
router.get('/projects', browser_controller.projects);

module.exports = router;