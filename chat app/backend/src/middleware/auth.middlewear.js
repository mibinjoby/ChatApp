import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model";

export const protectRoute = async(req,res,next) =>{

    try {
        const token= req.cookies.jwt

        if(!token){
            return res.status(401).json({messagr:"unauthorized - No Token Provided"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decode){
            return res.status(401).json({messagr:"unauthorized - Token Is Invalid"})
        }
        const user = await user.findBYId(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({messagr:"User Not Found"})
        }
        req.user = user

        next()
        
    } catch (error) {
        console.log("Error In protectRoute middlewear: ",error.message);
        res.status(500).json({message:"internal server error"})
    }

}