require('dotenv').config()

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// routes
const home = require('./routes/appRouter')
app.use(cors())
app.use(express.static(path.join(__dirname, '../frontend')))
app.use(express.json())


app.use('/SomeFullStackApp/app', home)

app.listen(port, (req, res)=>{
    console.log(`Listening on port ${port}`);  
})