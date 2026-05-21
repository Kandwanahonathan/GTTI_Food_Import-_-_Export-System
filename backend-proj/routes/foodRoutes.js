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

// select food in the database

router.get('/foodList', async(req,res)=>{
    try {
        const foodList= await food.find()
        return res.status(200).json({success:true ,list:foodList})
    } catch (err) {
        console.log(err);
        return res.status(500).json({Error:err})
    }
})

//update the data in database

router.put('/updateFood/:_id', async(req,res) =>{
    try {
        const {_id}=req.params
         const {Food_Id,Food_Name,Food_OwnerName} =req.body

         let updates = {}
         if (Food_Id) updates.Food_Id = Food_Id;
         if (Food_Name) updates.Food_Name = Food_Name;
         if (Food_OwnerName) updates.Food_OwnerName = Food_OwnerName;

         const updateFood=await food.findByIdAndUpdate(_id, updates, {returnDocument:'after'})
         return res.status(200).json({message:"food updated successfully",update:updateFood})
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