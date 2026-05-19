const mongoose=require('mongoose')

const managerSchema= mongoose.Schema({
    ManagerId:{Types:Number, required:true , unique:true},
    UserName:{Types:String , required:true },
    Password :{Types:String , required: true}
})