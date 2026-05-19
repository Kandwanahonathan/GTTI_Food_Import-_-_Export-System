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

         const updateImport= await imports.findByIdAndUpdate(_id,{I_Id,Food_Id,Food_OwnerName,Quantity},{returnDocument:'after'})
         return res.status(200).json({message:"import updated successfully",update:updateImport})
    } catch (err) {
         console.log(err);
        return res.status(500).json({Error:err})
    }
})
// delete data in the database
router.delete('/deleteFood/:_id', async(req,res)=>{
    try {
        const {_id} =req.params
        const deleteFood=await food.findByIdAndDelete(_id)
        return res.status(200).json({message:"food Deleted succcessfully",delete:deleteFood})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
    }
})
module.exports=router