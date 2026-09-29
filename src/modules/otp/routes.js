import { Router } from "express";
import {  otpResendController, otpVerifyController } from "./controller/post.js";


const router = Router()


router.post("/verify", otpVerifyController)
router.post("/resend", otpResendController)

export default router 