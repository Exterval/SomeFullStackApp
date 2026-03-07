let {products} = require('../data');

const getData = (req, res) =>{
    try{
        console.log('Sending...')
        return res.status(200).send({message: 'Success', data: products})
    }catch(err){
        console.error(err)
    }
}

const postData = (req, res) =>{
    const {id, name, image, price, desc} = req.body;
    if(!name || !price || !desc) return res.status(400).send({message: 'An error occurred.'})
    products.push({id, name, image, price, desc});
    return res.status(201).send({message: 'Success', data: {id, name, image, price, desc}})
}

const deleteData = (req, res) =>{
    try {
        const id =  Number(req.params.id);
        const prodIndex = products.findIndex(product => product.id === id)
        if(prodIndex === -1) return res.status(500).send({message: 'Product does not exist.'})
        products.splice(prodIndex,1);
        return res.status(200).send({message: 'Deleted successfully.', data: products})
    } catch (error) {
        toast.error('An error occurred.');
        console.error(error);
    }
}

const updateData = (req, res) =>{
    const {id} = req.body;

}

module.exports = {getData, postData, deleteData, updateData};