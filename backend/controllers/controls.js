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
    const {id, name, image, price, desc} = req.body;
    if(!name || !price || !desc) return res.status(400).send({message: 'An error occurred.'})
    res.status(201).send({message: 'Success', data: {id, name, image, price, desc}})
    products.push({id, name, image, price, desc});
}

module.exports = {getData, postData};