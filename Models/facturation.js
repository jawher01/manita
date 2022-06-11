const mongoose=require('mongoose')
const FacturationSchema=new mongoose.Schema({
numfacturation:{
    type:Number
},
reffactfournisseur:{
    type:String
},
date:{
    type:Date
},
codetva:{
    type:Number
},
reffournisseur
 :{
    type:String
},
datealler:{
    type:Date
},
dateretour:{
    type:Date
},
designation :{
    type:String
},
nbrs:{
    type:Number
},
jrs:{
    type:Number
},
prixuttc:{
    type:Number
},
prixttc:{
    type:Number
},
tauxtva:{
    type:Number
},
montanttva:{
    type:Number
},
timbrefiscale:{
    type:Number
},
montantht:{
    type:Number
},
montantttc:{
    type:Number
},
montantfodec:{
    type:Number
},
rib:{
    type:Number
}

})
module.exports=mongoose.model("facturation",FacturationSchema)

















