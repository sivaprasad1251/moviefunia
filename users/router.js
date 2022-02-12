const express= require("express");
const router = express.Router();
const userServices = require("./service");


router.post("/register-user",userServices.createUsers);

router.post("/authenticate",userServices.authenticate);

module.exports = router;