const getData = (req, res) =>{
    console.log('Page 1')
    console.log('Sending...')
    res.status(200).send({'message': 'Success', 'data': 'Data is displayed here'})
}

const postData = (req, res) =>{
    console.log('Page 2')
    console.log('Sending...')
    res.status(200).send({'message': 'We create shit'})
}

module.exports = {getData, postData};