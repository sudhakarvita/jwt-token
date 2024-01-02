import Usermodel from "../common/user-model.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const userRegister = async(req,res)=>{
    try{
        const user = await Usermodel.create(req.body)
        res.status(201).json(user)
    }catch(err){
        console.error(err)
        res.status(500).json({err:'Failed to create user'})
    }
};


export const createNewUser = async (req, res) => {
    try {
      const { username, password,email,mobileno } = req.body;
      const hashedPassword = await bcrypt.hash(password, 6);

      const newUser = new Usermodel({ username, password: hashedPassword,email,mobileno });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };


export const userLogin = async (req,res) =>{
    try{
        const User = await Usermodel.findOne({"username":req.body.username,"mobileno":req.body.mobileno})
        if(!User){
            res.status(404).json('user not found')
        }
        const secretKey = 'my-secretKey';
        const token = jwt.sign({ "username":req.body.username, "mobileno":req.body.mobileno},secretKey,{ expiresIn: '1h' })
        res.status(201).json({User,token})
    }catch(err){
        res.status(500).json({err:'User login failed'})
    }
};


  export const getAllusers =  async(req,res)=>{
    try{
        const allUsers = await Usermodel.find()
        res.status(201).json(allUsers)
    }catch(err){
        res.status(500).jaon({err:'Not found users'})
    }
  };
  

export const userLoginwithpassword = async(req,res) =>{
    try{
        const user = await Usermodel.findOne({username:req.body.username})
        if(!user){
          return res.status(404).json({error:'user not found'})
        }
        const passwordMatch = await bcrypt.compare(req.body.password,user.password)
        console.log(user.password,'psm')
        if(!passwordMatch){
         return res.status(401).json({error:'password incorrect'})
        }
        res.status(200).json(user)
    }catch(error){
      return res.status(500).json({error:'user login failed'})
    }
}