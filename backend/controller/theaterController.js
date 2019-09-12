const theaterService=require('../Services/theaterService');

exports.getAllTheaters=(req,res)=>{
   
    theaterService.getTheater(req.body,(err,result)=>{
        if(err){
            console.log("error in controller ==>",err);
            let response={
                status:500,
                msg:'error in Controller',
            }
            res.send(response);
        }
        else{
            console.log("data in controller==>",result);
            let response={
                status:200,
                msg:'list of theaters',
                data:result
            }
            res.send(response);
        }
    })
}