const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res) => {
    console.log("MongoDB Atlas connected with authServer");
    
}).catch((err) => {
    console.log("Connection failed");
    console.log(err);
    
    
})