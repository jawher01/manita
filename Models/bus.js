const mongoose=require('mongoose')
const BusSchema=new mongoose.Schema({
nom:{
    type:String
},
matricul :{
    type:String
},
imageBus:{
    type:String
}
})
module.exports=mongoose.model("bus",BusSchema)