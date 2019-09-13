const book=require('../app/modules/booked');

exports.bookedSeats=(data,callback)=>{
    let updateSeats={$push:{seats:{$each:data.seats}}}

    book.bookedSeats(data,updateSeats,(err,result)=>{
        if(err){
            console.log("error in bookedService");
          return callback(err);
        }
        return callback(null,result);
    })
}





