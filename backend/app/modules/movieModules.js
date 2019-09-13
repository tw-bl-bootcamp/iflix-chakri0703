const mongoose = require('mongoose');

const movie = mongoose.Schema({
    title: {
        type: String,
        required: [true, "movie title ie required"]
    },
    review: {
        type: String,
        required: [true, "movie description is required"]
    },
    rating: {
        type: Number,
        required: [true, "rating is required"]
    },
    catagory: {
        type: String,
        required: [true, "catagory is required"]
    }
})

var movies = mongoose.model('movies', movie);

exports.getListMovies = (callback) => {
     movies.find({}, (err, result) => {
        if (err) {
            console.log("error in module==>", err);
            return callback(err);
        }
        if (result.length != 0) {
            return callback(null, result);
        }
        return callback(null, "movie List is Empty")
    })
}