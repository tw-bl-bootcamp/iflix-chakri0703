const book=require('../app/modules/booked');

exports.bookedSeats=(data,callback)=>{
    data.updateSeats={$addToSet:{seats:{$each:data.seats}}}

    book.bookedSeats(data,(err,result)=>{
        if(err){
            console.log("error in bookedService");
          return callback(err);
        }
        return callback(null,result);
    })
}





