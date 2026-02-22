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
    res.status(200).send({'message': 'We create shit'})
}

module.exports = {getData, postData};