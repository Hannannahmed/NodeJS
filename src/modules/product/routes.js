import { Router } from "express";
import { productController } from "./controller/post.js";
import { productGetController } from "./controller/get.js";
import { productUpdateController } from "./controller/put.js";
import { deleteProductController } from "./controller/delete.js";
import { adminMiddleware } from "../../middleware/rolemiddleware.js";

const router = Router()


router.get("/", productGetController)


router.use(adminMiddleware)

router.post("/", productController)
router.put("/:id", productUpdateController)
router.delete("/:id", deleteProductController)

export default router