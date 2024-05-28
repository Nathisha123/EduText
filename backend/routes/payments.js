const express = require('express');
const router = express.Router();

const { sendCourseBuyEmail } = require('../controllers/payments');
const { auth, isStudent } = require('../middleware/auth');

router.post('/course-buy-email', auth, isStudent, sendCourseBuyEmail);

module.exports = router
