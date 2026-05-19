const mongoose=require('mongoose')
const {Schema}= mongoose
const importSchema=new Schema({
    I_Id:{type:Number, required:true , unique:true},
    Food_Id:{type:mongoose.Types.ObjectId,ref:'food', required:true },
    Food_OwnerName :{types:String, required: true},
    Quantity :{types:Number, required: true}
})
const imports= mongoose.model('Imports',importSchema)

module.exports=imports