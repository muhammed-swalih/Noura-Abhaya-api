import bcrypt from 'bcryptjs'
import AuthModel from '../Models/AuthModel.js';


export const registerUser = (async(req,res)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
  
    const newUser = new AuthModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
    });
  
    try {
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      next(error)
    }
})

export const loginUser = (async(req,res)=> {
    try {
        const err = new Error();
        err.message = "user is not found"
        err.status = 400

        const user = await AuthModel.findOne({username : req.body.username})
        if(!user) return res.status(404).json("user is not found")
        const isPassword = await bcrypt.compare(req.body.password , user.password)
        if(!isPassword) return res.status(401).json("incorrect username or password")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})