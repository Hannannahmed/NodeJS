import { Router } from "express";
import userRouter from '../modules/user/routes.js'
import postRouter from '../modules/post/routes.js'
const router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);


export default router