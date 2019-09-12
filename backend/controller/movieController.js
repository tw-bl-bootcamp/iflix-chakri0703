const movieService=require('../Services/movieService');

exports.getAllMovies=(req,res)=>{

    movieService.getAllMovies((err,result)=>{
        if(err){
            console.log("error in the controller");
            let response={
                status:500,
                msg:'error in controller',
                data:err
            }
            res.send(response);
        }
            else{
                let response={
                    status:200,
                    msg:'movies list',
                    data:result
                }
                res.send(response);
            }
    })
}