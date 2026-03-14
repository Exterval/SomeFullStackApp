const express = require('express');
const router = express.Router();

const {getData, getDataById, postData, deleteData, updateData} = require('../controllers/controls');

router.route('/').get(getData)
router.route('/add').post(postData)
router.route('/:id').delete(deleteData).put(updateData).get(getDataById)

module.exports = router;