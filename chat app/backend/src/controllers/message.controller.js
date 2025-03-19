import User from "../models/user.model.js"; 
import Message from"../models/message.model.js"
import cloudinary from"../lib/cloudinary.js"


export const getUsersForSidebar = async (req,res) => {
try {
    const loggedUserId = req.user._id

    const filteredUsers = await User.find({_id:{$ne:loggedUserId}}).select ("-password");

     res.status(200).json(filteredUsers)

} catch (error) {
    console.log("error in getUsersForSidebar: ", error.message);
    res.status(500).json({message:"internal server error"})
    
}
}

export const getMessage =async (req,res) => {
    try {
        const{ id: userTochatId} = req.params
        const senderId = req.user._id

        const message =await Message.find({
            $or:[
                {senderId:senderId,receiverId:userTochatId},
                {senderId:userTochatId,receiverId:myId}
            ]
        })
        res.status(200).json(message)

    } catch (error) {
        console.log("error in getMessages controller: ", error.message);
    res.status(500).json({message:"internal server error"}) 
    }
}

export const sendMessage = async (req,res) =>{
    try {
        const {text ,image} =req.body
        const{id: reciverId} = req.params
        const senderId = req.user._id

        let imageurl
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageurl = uploadResponse.secure_url
        }

        const newMessage =new Message ({
            senderId,
            reciverId,
            text,
            image:imageurl,

        })

        await newMessage.save()

         res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in sendMessages controller: ", error.message);
    res.status(500).json({message:"internal server error"}) 
    }
}

