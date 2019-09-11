const userModule = require('../app/modules/user');

exports.login = (data, callback) => {
    userModule.login(data, (err, result) => {
        if (err) {
            console.log("error in service", err);
            return callback(err);
        }
        return callback(null, result);
    })
}