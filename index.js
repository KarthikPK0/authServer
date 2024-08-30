const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/router')
require('./db/connection')

const authServer = express()
authServer.use(cors())
authServer.use(express.json())
authServer.use(router)

const PORT = 3000 || process.env.PORT

authServer.listen(PORT, () => {
    console.log(`AuthServer started at port : ${PORT}`);  
})

authServer.get('/', (req,res) => {
    res.status(200).send(`<h1 style="color:red">AuthServer started and waiting for client request!!</h1>`)
    
} )

