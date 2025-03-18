import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        senderId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            requried: true,

        },
        reciverId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,
            
        },
        text:{
            type:String,
        },
        image:{
            type:String,
        },
    },
    {timestamps: true }
)

export  default Message
