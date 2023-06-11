const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect("mongodb+srv://Gowthamigl:QRXYp8X7QHe8bRXG@gowthamcluster.tsfce1d.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log('data base connected')
})
.catch((err)=>{
    
    console.log(err)
})
