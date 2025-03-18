import express, { json } from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieparser from"cookie-parser"

dotenv.config()

const app = express ();

const PORT = process.env.PORT

app.use(express,json())

app.use(cookieparser())

app.use("/app/auth",authRoutes)

app.listen(PORT, () => {
    console.log("server is runing on PORT:"+ PORT );
    connectDB();
    

})