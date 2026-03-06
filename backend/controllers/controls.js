let {products} = require('../data');

const getData = (req, res) =>{
    try{
        console.log('Sending...')
        res.status(200).send({message: 'Success', data: products})
    }catch(err){
        console.error(err)
    }
}

const postData = (req, res) =>{
    const {id, name, image, price, desc} = req.body;
    if(!name || !price || !desc) return res.status(400).send({message: 'An error occurred.'})
    res.status(201).send({message: 'Success', data: {id, name, image, price, desc}})
    products.push({id, name, image, price, desc});
}

// FIX FUNCTION
const deleteData = (req, res) =>{
    const {id} = req.body;
    try {
        products.filter(product=>product.id !== id);
        console.log(products);
        res.status(200).send({message: 'Success'});
    } catch (error) {
        toast.error('An error occured.');
        console.error(error);
    }
}

const updateData = (req, res) =>{
    const {id} = req.body;

}

module.exports = {getData, postData, deleteData, updateData};