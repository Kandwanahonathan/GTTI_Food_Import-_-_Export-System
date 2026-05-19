const mongoose=require('mongoose')
const {Schema}= mongoose
const foodSchema=new Schema({
    Food_Id:{type:Number, required:true , unique:true},
    Food_Name:{type:String , required:true },
    Food_OwnerName :{type:String, required: true}
})
const food= mongoose.model('Foods',foodSchema)

module.exports=food