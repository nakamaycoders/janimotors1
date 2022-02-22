const mongoose = require('mongoose');
// require('../.env')
var mongoDBURL= "mongodb+srv://janimotors:janimotors@cluster0.ifzrd.mongodb.net/janiMotors"
mongoose.connect(mongoDBURL , {useUnifiedtopology :true , useNewUrlParser : true})

// .then(()=>{
//     console.log('mongodb connected successfully');
// })

var dbconnect= mongoose.connection
dbconnect.on('error' , () =>
{
    console.log('mongodb connection failed')

})

dbconnect.on('connected' , () =>
{
    console.log('mongodb connection successfully')
    
})

module.exports = mongoose;