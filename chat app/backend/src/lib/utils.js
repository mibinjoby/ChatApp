export const genrateToken= (userId,res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expriesIn:"7d"
    })
    res.cookie("jwt",token,{
        maxAge: 7 + 24 + 60 + 60 + 1000,
        httponly:true, //prevent attacks cross-site scripting attacks
        samesite:"strict", //csrf attack cross-site request forgery attacks
        secure: process.env.NODE_ENV !=="development"
    })

    return token;
}