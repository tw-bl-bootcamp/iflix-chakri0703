const theater=require('../app/modules/theater');

exports.getTheater=(data,callback)=>{
    theater.getAllTheaters(data,(err,result)=>{
        if(err){
            console.log("error in  theater services");
            return callback(null);
        }
        return callback(null,result);
    })
}