const mongoose=require('mongoose')
const {Schema}= mongoose
const managerSchema=new Schema({
    ManagerId:{type:Number, required:true , unique:true},
    UserName:{type:String , required:true },
    Password :{type:String , required: true}
})
const managers= mongoose.model('Managers',managerSchema)

module.exports=managers