const mongoose=require('mongoose');

const theaters=mongoose.Schema({
    title:{
        type:String,
        required:[true,"theater name is required"]
    },
    time:[{
        type:Date,
        require:[true,"time is required"]
    }],

})
let theater=mongoose.model('theaters',theaters);

exports.getAllTheaters=(data,callback)=>{
    theater.find({title:data.title},(err,result)=>{
        if(err){
            console.log("error in dbs ==>",err);
           return callback(null);
        }
        if(result.length==0){
            console.log("movie doesnot exists ");
           return callback(null,"no theaters");
        }
        return callback(null,result)
    })
}