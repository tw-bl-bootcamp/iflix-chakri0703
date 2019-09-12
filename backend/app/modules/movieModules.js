const mongoose=require('mongoose');

const movie=mongoose.Schema({
    title:{
        type :String,
        required:[true,"movie title ie required"]
    },
    review:{
        type:String,
        required:[true,"movie description is required"]
    },
    rating:{
        type:Number,
        required:[true,"rating is required"]
    },
    catagory:{
        type:String,
        required:[true,"catagory is required"]
    },
    venue:{
        type:String,
        required:[true,"venue is required"]
    },
    time:[{
        type:Date,
        required:[true,"time is required"]
    }]
})

var movies=mongoose.model('movies',movie);

exports.getListMovies=(callback)=>{
    movies.find((err,result)=>{
        if(err){
            console.log("error in module==>",err);
            return callback(null);
        }
        if(result.length!=0){
            console.log("movie List is Empty");
            return callback(null,"movie List is Empty")
        }
        return callback(null,result);
    })
}