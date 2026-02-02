const express = require('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    console.log('I am working')
    res.status(200).send('Hello i am sent.')
})

router.route('/second').get((req, res)=>{
    console.log('I am working too!')
    res.status(200).send('Hello i am sent too!')
})

module.exports = router;