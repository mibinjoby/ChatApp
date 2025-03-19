import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        senderId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,

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
const Message = mongoose.model("Message", MessageSchema);

export  default  Message;
