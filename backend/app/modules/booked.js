const mongoose=require('mongoose');

var booked=mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required']
    },
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

exports.bookedSeats=(data,updateSeats,callback)=>{
    book.updateOne({title:data.title,time:data.time},updateSeats,(err,result)=>{
        if(err){
            console.log("error in updating seats===>",err);
         return callback(err);
        }
        else{
            // console.log(book.find());
            
            console.log("data modified");
            
            return callback(null,result);
        }
    })
}