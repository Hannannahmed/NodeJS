import { Router } from "express";
import { postController } from "./controller/post.js";
import { getController } from "./controller/get.js";


const router =Router()

router.post("/",postController)
router.get("/",getController)

export default router