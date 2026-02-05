const express = require('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    console.log('Page 1')
    res.status(200).send('Hello i am sent.')
})

router.route('/second').get((req, res)=>{
    console.log('Page 2')
    res.status(200).send('Hello i am sent too!')
})

module.exports = router;