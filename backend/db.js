const { default: mongoose, Mongoose } = require("mongoose");
const mongoURI = "mongodb://localhost:27017/Notey"

const connect2Mongo = async ()=>{
    mongoose.connect(mongoURI)
    console.log("Db connected")
}
module.exports = connect2Mongo;
