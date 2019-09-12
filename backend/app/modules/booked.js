const mongoose=require('mongoose');

var booked=mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required']
    },
    time:{
        type:String,
        required:[true,'time is required']
    },
    seats:[{
      type:Number  
    }]
})

var book=mongoose.model('booked',booked);

exports.bookedSeats=(data,callback)=>{
    book.updateOne({title:data.title,time:data.time},data.updateSeats,(err,result)=>{
        if(err){
            console.log("error in updating seats===>",err);
         return callback(err);
        }
        else{
            return callback(null,result);
        }
    })
}