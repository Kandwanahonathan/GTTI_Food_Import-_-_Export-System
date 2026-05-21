const express=require('express')
const router =express.Router()
const imports=require('../schema/importSchema.js')

router.post('/addImport',async(req,res)=>{
    try {
        const {I_Id,Food_Id,Food_OwnerName,Quantity} =req.body
        if (!I_Id || !Food_Id || !Food_OwnerName || !Quantity) {
            return res.status(403).json({message:"please fill out missing field"})
        }
        const addImport=await imports.create({I_Id,Food_Id,Food_OwnerName ,Quantity})
        return res.status(201).json({message:"import added successfully",added:addImport})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
        
    }
})

// select food in the database

router.get('/importList', async(req,res)=>{
    try {
        const importList= await imports.find()
        return res.status(200).json({success:true ,list:importList})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
    }
})

//update the data in database

router.put('/updateImport/:_id', async(req,res) =>{
    try {
        const {_id}=req.params
         const {I_Id,Food_Id,Food_OwnerName,Quantity} =req.body

         let update={}
         if(I_Id)update.I_Id=I_Id
         if(Food_Id)update.Food_Id=Food_Id
         if(Food_OwnerName)update.Food_OwnerName=Food_OwnerName
         if(Quantity)update.Quantity=Quantity

         const updateImport= await imports.findByIdAndUpdate(_id,update,{returnDocument:'after'})
         return res.status(200).json({message:"import updated successfully",update:updateImport})
    } catch (err) {
         console.log(err);
        return res.status(500).json({Error:err})
    }
})
// delete data in the database
router.delete('/deleteImport/:_id', async(req,res)=>{
    try {
        const {_id} =req.params
        const deleteImport=await imports.findByIdAndDelete(_id)
        return res.status(200).json({message:"import Deleted succcessfully",delete:deleteImport})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
    }
})
module.exports=router