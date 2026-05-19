const mongoose=require('mongoose')

function connection() {
    try {
        const conn =mongoose.connect('mongodb://localhost:27017/GTTI')
        console.log('connected successfully')
    } catch (err) {
        console.log(err);
        
    }
}
connection()

module.exports=connection