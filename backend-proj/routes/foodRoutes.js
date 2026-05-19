const express=require('express')
const router =express.Router()
const food=require('../schema/foodSchema.js')

router.post('/addFood',async(req,res)=>{
    try {
        const {Food_Id,Food_Name,Food_OwnerName} =req.body
        if (!Food_Id || !Food_Name || !Food_OwnerName) {
            return res.status(403).json({message:"please fill out missing field"})
        }
        const addFood=await food.create({Food_Id,Food_Name,Food_OwnerName})
        return res.status(201).json({message:"food added successfully",added:addFood})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
        
    }
})
module.exports=router