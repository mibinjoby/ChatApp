import express from "express";
import { protectRoute } from "../middleware/auth.middlewear";

const router  =express.Router()

router.get("/users",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getmessage)

router.post("/send/id",protectRoute,sendMessage)

export default router