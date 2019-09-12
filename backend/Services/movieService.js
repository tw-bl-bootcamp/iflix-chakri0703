const movieModule=require('../app/modules/movieModules');

exports.getAllMovies=(callback)=>{
    movieModule.getListMovies((err,result)=>{
        if(err){
            console.log("error in Services ",err);
            return callback(err);
        }
        return callback(null,result)
    })
}