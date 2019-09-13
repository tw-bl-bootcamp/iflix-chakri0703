const mongoose=require('mongoose');

const theaters=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name of the theater is required"]
    },
    title:{
        type:String,
        required:[true,"theater name is required"]
    },
    time:[{
        type:String,
        require:[true,"time is required"]
    }],
    address:{
        type:String,
        required:[true,"theater address is important"]
    }
})
let theater=mongoose.model('theaters',theaters);

exports.getAllTheaters=(data,callback)=>{
    theater.find({title:data.title},(err,result)=>{
        if(err){
            console.log("error in dbs ==>",err);
           return callback(err);
        }
        if(result.length==0){
           return callback(null,"no theaters");
        }
        return callback(null,result)
    })
}