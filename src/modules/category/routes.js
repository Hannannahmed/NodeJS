import { Router } from "express";
import { categoryController } from "./controller/post.js";
import { categoryGetController } from "./controller/get.js";
import { categoryUpdateController } from "./controller/put.js";
import { deleteCatController } from "./controller/delete.js";
import { adminMiddleware } from "../../middleware/rolemiddleware.js";

const router = Router()


router.get("/", categoryGetController)


router.use(adminMiddleware)

router.post("/", categoryController)
router.put("/:id", categoryUpdateController)
router.delete("/:id", deleteCatController)

export default router