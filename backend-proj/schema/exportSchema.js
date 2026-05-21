const mongoose=require('mongoose')
const {Schema}= mongoose
const exportSchema=new Schema({
    E_Id:{type:Number, required:true , unique:true},
     Food_Id:{type:mongoose.Schema.Types.ObjectID,ref:'food', required:true },
    ExportDate :{type:String, required: true},
    Quantity :{type:Number, required: true}
})
const exportModel= mongoose.model('Exports',exportSchema)

module.exports=exportModel