const mongoose=require('mongoose')
const ChauffeurSchema=new mongoose.Schema({
nom:{
    type:String
},
prenom:{
    type:String
},
naissance :{
    type:Date
},
adresse:{
    type:String
},
telephone:{
    type:Number
}
})
module.exports=mongoose.model("chauffeur",ChauffeurSchema)