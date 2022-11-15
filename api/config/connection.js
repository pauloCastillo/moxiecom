const mongoose = require('mongoose');

const dbConnection = ()=>{
    const uri = process.env.DB_URI
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err)=>{
        if(!err){
            console.log("conexion correcta")
        }else{
            console.log("error de conexion")
        }
    })
}

module.exports = dbConnection