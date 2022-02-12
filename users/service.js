const usersModel = require("./model");
const passport = require('passport');

const createUsers = (req,res)=>{
    //storing data from front end to body
    let body = req.body;
    console.log("my body from front end",body);
    //insering the data
    usersModel.create(body, (err, sucRes)=>{

        if(err){
            console.log("eror",err);
            res.status(500).send({status:false, msg : "internel server error", err: err});
        }else{
            console.log("success response from db", sucRes);
            res.status(200).send({status: true, msg : "user created successfully", data: sucRes});
        }

    })

}

const authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports={
    createUsers,
    authenticate
}

