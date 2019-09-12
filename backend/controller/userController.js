const service = require('../Services/user')

exports.login = (req, res) => {
    req.checkBody('email', 'invalid email').isEmail();
    req.checkBody('password', 'invaild password').isLength({ min: 4 });
    var errors = req.validationErrors();
    if (errors) {
        res.status(500).send(errors[0].msg)
    }
    else {
        console.log("checking body in comtroller==>",req.body);
        
        service.login(req.body, (err, result) => {
            if (err) {
                let response = {
                    'status': 500,
                    'msg': 'err',
                    'msg': err
                }
                res.send(response);
            }
            let response = {
                status: 200,
                msg: 'login Sucessful',
                data: result
            }
            res.send(response);
        })
    }
}

