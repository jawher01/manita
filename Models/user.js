const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
nom:{
    type:String,
    required:true
},
prenom:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
role:{
    type:String,
    enum:["admin","client"]
},
password:{
    type:String,
    required:true
},
image:{
type:String

},
hotel:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"hotel"
},
circuit:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"circuit"
},
vol:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"vol"
}

})
module.exports=mongoose.model('user',UserSchema)