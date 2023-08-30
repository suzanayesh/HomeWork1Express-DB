import express from 'express';
import {User} from "../db/entity/user.js";
import exp from 'constants';

var router = express.Router();
router.post("/register", async(req, res)=>{
    try{
        const {username, password}=req.body;
const user= new User();
user.username=username;
user.password=password;
await user.save();
res.status(201).send('user insert successfuly');
}catch(error){
    console.log("error in register");
res.send('Error !');
}

});
export default router;