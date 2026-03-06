const express = require('express');
const router = express.Router();

const {getData, postData, deleteData, updateData} = require('../controllers/controls');

router.route('/').get(getData)
router.route('/add').post(postData)
router.route('/:id').delete(deleteData).put(updateData)

module.exports = router;