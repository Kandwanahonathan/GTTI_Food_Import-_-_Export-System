const express=require('express')
const cors=require('cors')
const connection=require('./db/conn.js')
const foodRoute=require('./routes/foodRoutes.js')
const app=express()



app.use(express.json())
app.use(cors())

app.use('/foodRoute',foodRoute)


app.listen(5000,()=>{
    console.log('server run on http://localhost:5000');
    
})