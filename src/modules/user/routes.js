import { Router } from "express";
import { postController } from "./controller/post.js";
import { getController } from "./controller/get.js";
import { signUpController } from "./controller/signup.js";
import { loginController } from "./controller/login.js";


const router = Router()

router.post("/signup", signUpController)
router.post("/login", loginController)
router.post("/", postController)
router.get("/", getController)

export default router