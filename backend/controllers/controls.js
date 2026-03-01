let {products} = require('../data');

const getData = (req, res) =>{
    try{
        console.log('Page 1')
        console.log('Sending...')
        res.status(200).send({message: 'Success', data: products})
    }catch(err){
        console.error(err)
    }
}

const postData = (req, res) =>{
    console.log('Page 2')
    console.log('Sending...')
    const {name, price, description} = req.body;
    if(!name || !price || !description) return res.status(400).send({message: 'An error occurred.'})
    res.status(201).send({message: 'Success', data: {name, price, description}})
}

module.exports = {getData, postData};