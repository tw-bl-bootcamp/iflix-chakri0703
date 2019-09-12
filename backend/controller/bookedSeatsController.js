const bookService=require('../Services/bookedSeatsService');

exports.bookController=(req,res)=>{
    bookService.bookedSeats(req.body,(err,result)=>{
        if(err){
            let response={
                status:500,
                msg:"error while booking seats"
            }
            res.send(response)
        }
        else{
            let response={
                status:200,
                msg:'booked seat successful',
                data:result
            }
            res.send(response);
        }
    })
}