const mongoose= require('mongoose')
const ChambreSchema=new mongoose.Schema({
nom:{
    type:String
},
description:{
type:String
},
numero_chambre :{
    type:Number
},
etage:{
    type:String
},

image:{
    type:[String]
},

})
module.exports=mongoose.model("chambre",ChambreSchema)