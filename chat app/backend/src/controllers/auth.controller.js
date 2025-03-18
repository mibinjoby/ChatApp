import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import express from "express"
import { genrateToken } from "../lib/utils.js"

const router = express.Router()

export const signup = async (req,res ) => {
    const {fullName,email,password} = req.body


    try {

        if (!fullName || !email || !password)
            return res.status(400).json({ message: " All the  fileds are required "})

        if (password.length <= 6){
            return res.status(400).json({ message: "password must be at least 6 characters"})
        }

       const user = await User.findone ({email})

       if  (user) return res.status(400).json({message:"Email already exits"})

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash (password,salt)

        const newUser = new User(
            {
                fullName,
                email,
                password:hashedpassword

            }
        )

        if (newUser){

            genrateToken(newUser._id,res)
            await newUser.save()

            res.status(201).json({

                _id:newUser._id,
                fullName:newUser.fullname,
                id:newUser.email,
                profilepic: newUser.profilepic,
            })

        }else {
            res.status(400).json({ message:"Invaild user data"})
        }

    } catch (error) {
        console.log("error in signup controller",error.message);
        res.status(500).json({message:"internal server error"})
        
        
    }
    res.send("signup route")
}

export const login = async  (req,res ) => {
    const {email,password} = req.body


    try {
        const user = await User.findone({email})
        if(!user){
            return res.status(400).json({message:"invaild credential"})
        }
        await bcrypt.compare(password,user.password)
        if(!ispasswordcorrect){
            return res.status(400).json({message:"invaild credential"})
        }
        
        genrateToken(user._id,res)

        res.status(200).json({
            _id:newUser._id,
            fullName:newUser.fullname,
            id:newUser.email,
            profilepic: newUser.profilepic,


        })
    } catch (error) {
        console.log("Error is logn controller",error.message);
        res.status(500).json({message:"internal server error"})
        
        
    }
    res.send("login  route")
}

export const logout = (req,res ) => {

    try {
        res.cookie ("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("error in logout controller",error.message)
        res.status(500).json({message:"internal server error"})
        
        
    }
    
    res.send("logout route")
}

export const updateprofile =async (req,res) =>{
    
}
export default router;