const mongoose=require('mongoose')
const {Schema}= mongoose
const exportSchema=new Schema({
    E_Id:{type:Number, required:true , unique:true},
     Food_Id:{type:mongoose.Types.ObjectID,ref:'food', required:true },
    ExportDate :{types:String, required: true},
    Quantity :{types:Number, required: true}
})
const exports= mongoose.model('Exports',importSchema)

module.exports=exports