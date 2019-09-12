const mongoose = require('mongoose')

const user = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email should unique"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
})

var users = mongoose.model('user', user);

exports.login = (data, callback) => {
    users.find({ email: data.email, password: data.password }, (err, result) => {
        if (err) {
            console.log("error in mongodb", err);
            return callback(err);
        }
        if (result.length== 0) {
            console.log("no user exist");

            return callback(null, "no user exist")
        }
        return callback(null, result);
    })
}