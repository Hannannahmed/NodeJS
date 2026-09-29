import { Router } from "express";
import userRouter from '../modules/user/routes.js'
import postRouter from '../modules/post/routes.js'
import categoryRouter from '../modules/category/routes.js'
import productRouter from '../modules/product/routes.js'
import otpRouter from '../modules/otp/routes.js'
import { verifyToken } from "../middleware/auth.js";
const router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/category", verifyToken, categoryRouter);
router.use("/otp",  otpRouter);
router.use("/product", verifyToken, productRouter);


export default router