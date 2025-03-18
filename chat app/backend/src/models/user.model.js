import mongoose from "mongoose";

const userSchema = new mongooose.Schema(

    {
        email:{
            type:String,
            requried: true,
            unique:true,
        },
        fullName:{
            type:String,
            requried: true,
    

        },
        password:{
            type: true,
            required:true,
            minlength:6,
        },
        profilepic:{
            type:String,
            default:"",
        },
    },
    {timestamps: true }

);
const User = mongoose.model("User",userSchema)

export default User