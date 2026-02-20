const express = require('express');
const router = express.Router();

const {getData, postData} = require('../controllers/controls');

router.route('/').get(getData)
router.route('/add').post(postData)

module.exports = router;