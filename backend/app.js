require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

// routes
const home = require('./routes/appRouter')
// static
app.use(express.static('../frontend'))

app.use('/app', home)

app.listen(port, (req, res)=>{
    console.log(`Listening on port ${port}`);  
})