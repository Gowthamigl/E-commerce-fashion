const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect("mongodb://127.0.0.1:27017/mywebsite").then(()=>{
    console.log('data base connected')
})
.catch((err)=>{
    
    console.log(err)
})