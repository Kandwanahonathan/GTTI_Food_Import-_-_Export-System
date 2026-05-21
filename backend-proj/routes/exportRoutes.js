const express=require('express')
const router =express.Router()
const exports=require('../schema/exportSchema')

router.post('/addExport',async(req,res)=>{
    try {
        const {E_Id,Food_Id,ExportDate,Quantity} =req.body
        if (!E_Id || !Food_Id || !ExportDate || !Quantity) {
            return res.status(403).json({message:"please fill out missing field"})
        }
        const addExport=await exports.create({E_Id,Food_Id,ExportDate ,Quantity})
        return res.status(201).json({message:"import added successfully",added:addExport})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
        
    }
})

// select food in the database

router.get('/exportList', async(req,res)=>{
    try {
        const exportList= await exports.find()
        return res.status(200).json({success:true ,list:exportList})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
    }
})

//update the data in database

router.put('/updateExports/:_id', async(req,res) =>{
    try {
        const {_id}=req.params
         const {E_Id,Food_Id,ExportDate,Quantity} =req.body

         let update={}
         if(E_Id)update.E_Id=E_Id
         if(Food_Id)update.Food_Id=Food_Id
         if(ExportDate)update.ExportDate=ExportDate
         if(Quantity)update.Quantity=Quantity

         const updateImport= await exports.findByIdAndUpdate(_id,update,{returnDocument:'after'})
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
        const deleteImport=await exports.findByIdAndDelete(_id)
        return res.status(200).json({message:"import Deleted succcessfully",delete:deleteImport})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
    }
})
module.exports=router