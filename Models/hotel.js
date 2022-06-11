const mongoose=require('mongoose')
const HotelSchema=new mongoose.Schema({
nom:{
    type:String
},
etoile :{
    type:Number
},
adresse:{
    type:String
},
telephone:{
    type:String
},
imagehotel:[{
type:String
}],
chambre:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"chambre"
}],
type_chambre:{
    type:String
}
})
module.exports=mongoose.model("hotel",HotelSchema)