const mongoose=require('mongoose')

const gouverschema=new mongoose.Schema({
nom:{
    type:String,
 
},
desciption:{

},
imageGouv:{
type:String
},
hotels:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"hotel"
}],


})
module.exports=mongoose.model('gouvernerant',gouverschema)