let {products} = require('../data');

const getData = (req, res) =>{
    try{
        console.log('Sending...')
        console.log(products)
        return res.status(200).send({message: 'Success', data: products})
    }catch(err){
        console.error(err)
    }
}

const getDataById = (req, res) =>{
    try {
        const id = Number(req.params.id);
        const prodIndex = products.findIndex(product => product.id === id)
        if(prodIndex === -1) return res.status(500).send({message: 'Product does not exist.'});
        const product = products.find(product => product.id === id);
        return res.status(200).send({message: "success", data: product});
    } catch (error) {
        console.log(error)
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
    try {
        const {id, name, image, price, desc} = req.body;
        let prod = products.find(product => product.id === id)
         if(!prod) return res.status(500).send({message: 'Product does not exist.'})

        // put new values of product in a variable, REFACTOR TEMPORARY SOLTUION
        const newValueProd = {
            id: id, 
            name: name, 
            image: !image ? prod.image : image, 
            price: !price ? prod.price : price, 
            desc: !desc ? prod.desc : desc
        };
        // overwrite object values
        prod = {...prod, ...newValueProd}

        //update values in actual array
        const newProducts = products.map((product)=>{
            if(Number(prod.id) === Number(product.id)){
                product = {...newValueProd}
            }
            return product;
        })
        // replace existing products array
        products.splice(0, products.length);
        products.push(...newProducts);
        return res.status(200).send({message: 'Success', data: newProducts})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getData, getDataById, postData, deleteData, updateData};